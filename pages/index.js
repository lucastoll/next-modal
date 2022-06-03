import React from "react";
import Head from "next/head";
import Modal from "../src/components/Modal/index";
import Footer from "../src/components/Footer";
import { Container, Wrapper } from "../src/styles/styled";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(true);
  const [enableShowModalButton, setEnableShowModalButton] =
    React.useState(true);

  const openModal = () => {
    setEnableShowModalButton(false);
    setTimeout(() => {
      setAnimateModal(true);
      setShowModal(true);
    }, 100);
  };

  const closeModal = () => {
    setTimeout(() => {
      setAnimateModal(false);
    }, 500);
    setTimeout(() => {
      setShowModal(false);
      setEnableShowModalButton(true);
    }, 1500);
  };

  return (
    <Wrapper id="app">
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <h1 className="title">
          Welcome to <a href="#">testes-next</a>
        </h1>

        <p className="description">Get started by clicking this thing below</p>

        <div className="grid">
          <a
            className="card"
            onClick={enableShowModalButton === true ? openModal : undefined}
          >
            <h2>Open modal &rarr;</h2>
            <p>Click here to open the modal.</p>
          </a>

          <Link href="/image">
            <div className="card">
              <h2>Go to page next/image</h2>
            </div>
          </Link>
          <Link href="/404">
            <div className="card">
              <h2>Go to page 404</h2>
              <p>Click here or enter a random /link in the adress</p>
            </div>
          </Link>
          <Link href="/api">
            <div className="card">
              <h2>Go to my api response</h2>
            </div>
          </Link>
        </div>
        {showModal && (
          <Modal closeModal={closeModal} animateModal={animateModal} />
        )}
      </Container>
      <Footer></Footer>
    </Wrapper>
  );
}
