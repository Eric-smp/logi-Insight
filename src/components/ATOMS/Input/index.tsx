import { TInput } from "@/types";
import * as Styles from "./styles";
import InputMask from "react-input-mask";
export function Input({
  heigth,
  placeholder,
  width,
  label,
  type,
  backgroundColor,
  color,
  icon,
  backgroundLalbe,
  autoComplete,
  id,
  onChange,
  register,
  isInputMask,
}: TInput) {
  return (
    <Styles.stylesInput divInput={width}>
      <Styles.Label backgroundLabel={backgroundLalbe}>{label}</Styles.Label>

      <Styles.inputStyle
        heigth={heigth}
        placeholder={placeholder}
        width={width}
        label={label}
        type={type}
        backgroundColor={backgroundColor}
        color={color}
        icon={icon}
        autoComplete={autoComplete}
        id={id}
        // backgroundLalbe={bac}
        onChange={onChange}
        register={register}
        {...register}
      />

      <span className="prefixIcon">{icon}</span>
    </Styles.stylesInput>
  );
}
