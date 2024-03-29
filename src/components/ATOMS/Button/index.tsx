import { TButton } from "@/types";
import * as Styles from "./styles";

export function Button({
  text,
  heigth,
  width,
  onClick,
  backgroundColor,
  type,
  color,
  colorHover,
  backgroundColorHover,
  id,
  disabled,
}: TButton) {
  return (
    <Styles.buttonStyle
      text={text}
      heigth={heigth}
      width={width}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      backgroundColorHover={backgroundColorHover}
      colorHover={colorHover}
      type={type}
      id={id}
      disabled={disabled}
    >
      <span>{text}</span>
    </Styles.buttonStyle>
  );
}
