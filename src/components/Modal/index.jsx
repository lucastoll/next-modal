import React from "react";
import styled from "styled-components";

const MyModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: rgba(255, 255, 255, 0.9);
  z-index: 1;

  .modal {
    animation: ${(props) =>
    props.animateModal ? "modal 1s" : `modalLeave 1s forwards`};
    //transition: all 0.9s;
    padding: 30px;
    background: #f1f1f1;
    border: 2px solid #f2f2f2;
    border-radius: 16px;

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      input {
        padding: 15px;
        border: 3px solid #000000;
        border-radius: 8px;
      }

      button {
        background: #475467;
        color: white;
        font-size: 30px;
        padding: 15px;
        border-radius: 16px;
        border: none;
      }
    }

    @keyframes modal {
      from {
        transform: translate(0, 100vh);
      }
      to {
        transform: translate(0, 0);
      }
    }

    @keyframes modalLeave {
      from {
        transform: translate(0, 0);
      }
      to {
        transform: translate(0, 100vh);
      }
    }
  }
`;

export default function Modal({ closeModal, animateModal }) {
  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.id == "containerpopup" || e.target.id == "botaopopup")
        closeModal();
    });

    return () => {
      document.addEventListener("click", (e) => {
        if (e.target.id == "containerpopup" || e.target.id == "botaopopup")
          closeModal();
      });
    };
  }, []);

  return (
    <MyModal id="containerpopup" animateModal={animateModal}>
      <div className="modal">
        <h2>Seção de assinatura - pop up</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut</p>
        <div>
          <input></input>
          <input></input>
          <button onClick={closeModal} id="botaopopup">
            Button
          </button>
        </div>
      </div>
    </MyModal>
  );
}
