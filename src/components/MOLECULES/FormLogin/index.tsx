import { Input, Button, MaterialInputMask } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import { useRouter } from "next/router";
import { TUserLogin } from "@/types";
import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

interface TUserCNPJ {
  cnpj: string;
}
export function FormLogin() {
  const [disableButton, setDisabledButton] = useState(true);
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { setIsModalOpen, setModalType, loginUser } = useGlobal();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TUserLogin>();
  const watchCNPJ = watch("cnpj");
  const watchPassword = watch("senha");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    if (
      watchCNPJ !== undefined &&
      watchCNPJ !== "" &&
      watchCNPJ.length === 18 &&
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
      <Styles.Form onSubmit={handleSubmit(loginUser)}>
        <MaterialInputMask
          register={register("cnpj", {
            required: {
              value: true,
              message: "Deu bom",
            },
          })}
          width={"15rem"}
          heigth={""}
          placeholder={"Digite o seu CNPJ"}
          label={"cnpj"}
          type={"string"}
          id={"loginCNPJ"}
          maskPattern={"99.999.999/9999-99"}
          autoComplete="new-password"
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
          register={register("senha")}
          width={"15rem"}
          heigth={""}
          placeholder={"Digite sua senha"}
          label={"senha"}
          type={!isVisiblePassword ? "password" : "text"}
          id="loginPassword"
          autoComplete="new-password"
          icon={
            !isVisiblePassword ? (
              <EyeOff
                width={"20px"}
                onClick={() => setIsVisiblePassword(true)}
              />
            ) : (
              <Eye width={"20px"} onClick={() => setIsVisiblePassword(false)} />
            )
          }
        />
        <Button
          text={"Entrar"}
          heigth={"2.5rem"}
          width={"15rem"}
          type="submit"
          id="loginIn"
          disabled={disableButton}
          // onClick={() => {}}
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
