import { Input, Button } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";

export function FormLogin() {
  const { setIsModalOpen, setModalType } = useGlobal();
  return (
    <Styles.contentForm>
      <h1>Entrar</h1>
      <Styles.Form>
        <Input
          width={"15rem"}
          heigth={""}
          placeholder={"Digite seu CNPJ"}
          label={"cnpj"}
          type="text"
          id="loginCnpj"
        />
        <Input
          width={"15rem"}
          heigth={""}
          placeholder={"Digite sua senha"}
          label={"senha"}
          type="password"
          id="loginPassword"
        />
        <Button
          text={"Entrar"}
          heigth={"2.5rem"}
          width={"15rem"}
          type="submit"
          id="loginIn"
        />
        <Button
          text={"Criar conta"}
          heigth={"2.5rem"}
          width={"15rem"}
          type="button"
          onClick={() => {
            setIsModalOpen(true), setModalType(0);
          }}
          id="singIn"
        />
      </Styles.Form>
    </Styles.contentForm>
  );
}
