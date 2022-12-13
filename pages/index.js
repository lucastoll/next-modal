import React from "react";
import { Container, Main } from '../styles/styled'
import Modal from "../components/Modal/index";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = React.useState(false);
  const [animateModal, setAnimateModal] = React.useState(true);
  const [enableShowModalButton, setEnableShowModalButton] = React.useState(true);

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
    <Container>
      <Main>
      <h1 className="title">
          Welcome to <a href="#">testes-next</a>
        </h1>

        <p className="description">Get started by clicking one of the buttons</p>

        <div className="grid">
          <a
            className="card"
            onClick={enableShowModalButton === true ? openModal : undefined}
          >
            <h2>open modal &rarr;</h2>
            <p>a modal developed using a lot of states for work</p>
          </a>

          <Link href="/image">
            <div className="card">
              <h2>next/image</h2>
              <p>A page to test next image feature</p>
            </div>
          </Link>
          <Link href="/404">
            <div className="card">
              <h2>404</h2>
              <p>click here or enter a random /link in the adress to access</p>
            </div>
          </Link>
          <Link href="/api">
            <div className="card">
              <h2>my api response</h2>
              <p>simple api to test next api feature</p>
            </div>
          </Link>
          <Link href="/fetch">
            <div className="card">
              <h2>Go to page fetch api</h2>
              <p>a page that consumes  pokemon api</p>
            </div>
          </Link>
        </div>
        {showModal && (
          <Modal closeModal={closeModal} animateModal={animateModal} />
        )}
      </Main>
    </Container>
  )
}
