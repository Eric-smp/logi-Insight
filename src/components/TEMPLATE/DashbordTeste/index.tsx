import { MaterialInputMask } from "@/components";
import * as Styles from "./styles";
import { useForm } from "react-hook-form";

export function DashbordTeste() {
  const { register, handleSubmit } = useForm();

  const dataForm = (data: any) => {
    console.log(data);
  };

  return (
    <Styles.Wrapper>
      <h1>oiadsiamd</h1>

      {/* <form onSubmit={handleSubmit(dataForm)}>
        <MaterialInputMask
          mask={"99.999.999/9999-99"}
          register={register("cnpj")}
        />
        <button type="submit">Clique aqui</button>
      </form> */}

      {/* <h1>{process.env.GET_USERS}</h1> */}
    </Styles.Wrapper>
  );
}
