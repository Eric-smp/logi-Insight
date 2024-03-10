import { Input, Button, MaterialInputMask } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import { useRouter } from "next/router";
import { TUserLogin } from "@/types";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";

interface TUserCNPJ {
  cnpj: string;
}
export function FormLogin() {
  const [disableButton, setDisabledButton] = useState(true);
  const [usuarioCnpj, setUsuarioCnpj] = useState<TUserCNPJ>({} as TUserCNPJ);
  const { setIsModalOpen, setModalType } = useGlobal();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserLogin>();
  const watchCNPJ = watch("cnpj");
  const watchPassword = watch("password");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (
      watchCNPJ !== undefined &&
      watchCNPJ !== "" &&
      watchPassword !== "" &&
      watchPassword !== undefined
    ) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [watchCNPJ, watchPassword]);

  return (
    <Styles.contentForm>
      <h1>Entrar</h1>
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <MaterialInputMask
          register={register("cnpj")}
          width={"15rem"}
          heigth={""}
          placeholder={"Digite o seu CNPJ"}
          label={"cnpj"}
          type={"string"}
          id={"loginCNPJ"}
          maskPattern={"99.999.999/9999-99"}
          autoComplete="off"
        />

        {/* <Input
          isInputMask
          mask={"99.999.999/9999-99"}
          register={register("cnpj")}
          width={"15rem"}
          heigth={""}
          placeholder={"Digite seu CNPJ"}
          label={"cnpj"}
          type="text"
          id="loginCnpj"
          autoComplete="new-password"
        /> */}
        <Input
          register={register("password")}
          width={"15rem"}
          heigth={""}
          placeholder={"Digite sua senha"}
          label={"senha"}
          type="password"
          id="loginPassword"
          autoComplete="off"
        />
        <Button
          text={"Entrar"}
          heigth={"2.5rem"}
          width={"15rem"}
          type="submit"
          id="loginIn"
          disabled={disableButton}

          // onClick={() => router.push("/login")}
        />
        <Button
          text={"Criar conta"}
          heigth={"2.5rem"}
          width={"15rem"}
          type="button"
          backgroundColor="blue"
          color="white"
          backgroundColorHover="transparent"
          colorHover="blue"
          onClick={() => {
            setIsModalOpen(true), setModalType(0);
          }}
          id="singIn"
        />
      </Styles.Form>
    </Styles.contentForm>
  );
}
