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
  messageError,
  error,
}: TInput) {
  return (
    <Styles.stylesInput divInput={width}>
      <Styles.Label backgroundLabel={backgroundLalbe}>{label}</Styles.Label>
      {/* <input type="text" /> */}
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
        messageError={messageError}
        error={error}
        {...register}
      />

      <span className="prefixIcon">{icon}</span>
      {error ? (
        <div className="messageErrorDiv">
          <p>{messageError}</p>
        </div>
      ) : null}
    </Styles.stylesInput>
  );
}
