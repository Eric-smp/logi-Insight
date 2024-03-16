import styled from "styled-components";

export const ModalProduct = styled.div`
  width: 100%;
  max-width: 35rem;
  height: auto;
  padding: 2rem;
  background-color: #fff;

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
`;
