import { X, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import * as Styles from "./styles";
import { Input, Button } from "@/components";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import { off } from "process";

export function ModalCreateLogin() {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const { setIsModalOpen } = useGlobal();
  return (
    <Styles.ContentModal>
      <header>
        <span>
          <X color="#0d5bd1" onClick={() => setIsModalOpen(false)} />
        </span>
        <h1>Crie sua conta</h1>
      </header>
      <form>
        <Input
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Digite seu nome"}
          label={"Nome"}
          type={"text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createName"
        />
        <Input
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Digite seu sobrenome"}
          label={"Sobrenome"}
          type={"text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createSurname"
        />
        <Input
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Digite seu CNPJ"}
          label={"CNPJ"}
          type={"text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createCNPJ"
        />
        <Input
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Crie uma senha"}
          label={"Senha"}
          type={visiblePassword ? "password" : "text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createPassword"
          icon={
            visiblePassword ? (
              <EyeOff
                onClick={() => {
                  setVisiblePassword(false), console.log("osdoanosn");
                }}
                width={"20px"}
              />
            ) : (
              <Eye onClick={() => setVisiblePassword(true)} width={"20px"} />
            )
          }
        />
        <Button
          text={"Criar conta"}
          heigth={"3rem"}
          width={"20rem"}
          type={undefined}
          id="createLogin"
        />
      </form>
    </Styles.ContentModal>
  );
}
