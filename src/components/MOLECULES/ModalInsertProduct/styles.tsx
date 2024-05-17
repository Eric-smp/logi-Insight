import styled from "styled-components";

export const ModalProduct = styled.div`
  width: 100%;
  max-width: 35rem;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #fff;
  border-radius: 1rem;

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 1.5rem;
      color: #2b3b53;
    }

    span {
      width: 100%;
      text-align: end;

      svg {
        cursor: pointer;
      }
    }
  }

  main {
    display: flex;
    justify-content: center;
    .addProduct {
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;

      .addInput {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 2rem;
        width: 35px;
        height: 35px;
        background-color: #0d5bd1;
      }
    }
  }

  footer {
    display: flex;
    justify-content: center;
  }
`;
