import { TButton } from "@/types";
import styled from "styled-components";

export const buttonStyle = styled.button<TButton>`
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  border: 2px solid #0d5bd1;
  border-radius: 10px;
  color: ${({ color }) => color || "#000"};

  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ backgroundColorHover }) =>
      backgroundColorHover || "transparent"};
    color: ${({ colorHover }) => colorHover || "#000"};
  }
`;
