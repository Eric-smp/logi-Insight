import { TButton } from "@/types";
import styled from "styled-components";

export const buttonStyle = styled.button<TButton>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.disabled ? "#0d5bd1" : props.backgroundColor};
  border: 2px solid #0d5bd1;
  border-radius: 10px;
  color: ${({ color }) => color || "#000"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  /* cursor: not-allowed; */
    opacity: ${(props) => props.disabled ? '0.5' : '1'};
  outline: none;
  font-size: 1rem;
  :disabled {
    background-color: rgba(0, 80, 242, 0.4);
    pointer-events: none;
    :hover {
      background-color: rgba(0, 80, 242, 0.4);
    }
  }

  &:hover {
    background-color: ${({ backgroundColorHover }) =>
      backgroundColorHover || "transparent"};
    color: ${({ colorHover }) => colorHover || "#000"};
  }
`;
