import styled from "styled-components";
import { TModal } from "@/types";

export const Modal = styled.div<TModal>`
  height: 100vh;
  width: 100vw;
  /* padding: 2rem; */
  z-index: 50;
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(1rem);
  background-color: ${({ backgroundColorModal }) => backgroundColorModal};
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 2rem;
`;
