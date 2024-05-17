import styled from "styled-components";

export const BodyHome = styled.div`
  width: 100%;
  height: 80%;
  padding: 2rem 2rem 3rem;

  .Content {
    padding: 0rem 2rem;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    /* background-color: red; */
  }

  span {
    position: absolute;
    right: 1rem;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    padding: 1rem;
    text-align: center;
    display: flex;
    align-items: center;

    cursor: pointer;
    background-color: #7ae0f5;
  }
`;
