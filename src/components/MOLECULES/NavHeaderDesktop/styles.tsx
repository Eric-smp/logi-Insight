import styled from "styled-components";

export const navHeader = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  h3 {
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media only screen and (max-width: 764px) {
    display: none;
  }
`;
