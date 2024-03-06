import styled from "styled-components";

export const ContentModal = styled.div`
  width: 100%;
  max-width: 30rem;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 15px;
  background-color: #fff;
  gap: 2rem;

  header {
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;
