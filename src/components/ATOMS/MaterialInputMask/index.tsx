import * as Styles from "./styles";
import ReactInputMask from "react-input-mask";
import { TMaterialInputMask } from "@/types";

export function MaterialInputMask({
  heigth,
  id,
  label,
  maskPattern,
  placeholder,
  type,
  width,
  autoComplete,
  backgroundColor,
  backgroundLalbe,
  color,
  defaultValue,
  disabled,
  error,
  icon,
  isFocused,
  name,
  onBlur,
  onChange,
  register,
  rightSideIcon,
  value,
}: TMaterialInputMask) {
  return (
    <Styles.ElementDivInput
      heigth={heigth}
      width={width}
      id={id}
      label={label}
      maskPattern={maskPattern}
      placeholder={placeholder}
      type={type}
    >
      <Styles.LabelInput backgroundLabel={backgroundLalbe}>
        {label}
      </Styles.LabelInput>
      <ReactInputMask
        mask={maskPattern}
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        {...register}
      />
    </Styles.ElementDivInput>
  );
}
