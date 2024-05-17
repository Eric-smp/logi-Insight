import { X, Eye, EyeOff } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import * as Styles from "./styles";
import { Input, Button, MaterialInputMask } from "@/components";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import { TCreateUser } from "@/types";
import { off } from "process";
import { useForm, SubmitHandler } from "react-hook-form";

export function ModalCreateLogin() {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [messageError, setMessageError] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);

  const { setIsModalOpen, handleGetUser, password, setPassword } = useGlobal();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TCreateUser>();
  const watchName = watch("nome");
  const watchSurname = watch("sobrenome");
  const watchCNPJ = watch("cnpj");
  const watchPassword = watch("senha");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (
      watchName !== "" &&
      watchName !== undefined &&
      watchSurname !== "" &&
      watchSurname !== undefined &&
      watchCNPJ !== "" &&
      watchCNPJ !== undefined &&
      watchPassword !== "" &&
      watchPassword !== undefined
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [watchCNPJ, watchName, watchPassword, watchSurname]);

  useEffect(() => {
    if (watchPassword !== "" && watchPassword !== undefined) {
      setMessageError(false);
    } else {
      setMessageError(true);
    }
  }, [watchPassword]);

  return (
    <Styles.ContentModal>
      <header>
        <span>
          <X color="#0d5bd1" onClick={() => setIsModalOpen(false)} />
        </span>
        <h1>Crie sua conta</h1>
      </header>
      <form onSubmit={handleSubmit(handleGetUser)}>
        <Input
          register={register("nome", {
            required: {
              value: true,
              message: "Informe seu nome",
            },
          })}
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
          register={register("sobrenome")}
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Digite seu sobrenome"}
          label={"Sobrenome"}
          type={"text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createSurname"
        />
        <MaterialInputMask
          maskPattern="99.999.999/9999-99"
          register={register("cnpj")}
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
          register={register("senha")}
          width={"20rem"}
          heigth={"3rem"}
          placeholder={"Crie uma senha"}
          label={"Senha"}
          type={visiblePassword ? "password" : "text"}
          backgroundLalbe="#fff"
          autoComplete="new-password"
          id="createPassword"
          error={messageError}
          messageError="Senha incorreta"
          icon={
            visiblePassword ? (
              <EyeOff
                onClick={() => {
                  setVisiblePassword(false);
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
          type="submit"
          id="createLogin"
          backgroundColor="blue"
          color="white"
          backgroundColorHover="white"
          colorHover="blue"
          disabled={isButtonDisabled}
        />
      </form>
    </Styles.ContentModal>
  );
}
