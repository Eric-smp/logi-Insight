import styled from "styled-components";

export const wrapperLogin = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 5rem 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .introductionAndForm {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    gap: 1rem;
    background-color: #7ae0f5;
    border-radius: 1rem;
    .introductionSoftware {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      /* background-color: red; */

      h1 {
        font-size: 64px;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .formLogin {
      height: 100%;
      width: auto;
      background-color: #f5f5f5;
      border: 2px solid #0d5bd1;
      border-radius: 1rem;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media only screen and (max-width: 1024px) {
    .introductionAndForm {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      overflow-y: scroll;
      padding: 2rem;
      gap: 2rem;
      background-color: #7ae0f5;
      border-radius: 1rem;
      overflow-x: hidden;
      /* background-color: red; */
      .introductionSoftware {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
        /* background-color: red; */

        h1 {
          font-size: 64px;
        }

        p {
          font-size: 1.5rem;
        }
      }

      .formLogin {
        height: 100%;
        width: auto;
        background-color: #f5f5f5;
        border: 2px solid #0d5bd1;
        border-radius: 1rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
