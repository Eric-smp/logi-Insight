import { X } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import { Input, Button } from "@/components";
import { useForm } from "react-hook-form";
import {TCreateProduct} from "@/types"
export function ModalInsertProduct() {
  const { setIsModalOpen, handleCreateProdut } = useGlobal();
  const { register, handleSubmit, watch } = useForm<TCreateProduct>()
  const watchProduto = watch("nomeProduto")
  const watchQuantidade = watch("quantidade")
  return (
    <Styles.ModalProduct>
      <header>
        <span>
          <X color="#0d5bd1" onClick={() => setIsModalOpen(false)} />
        </span>
        <h1>Adicione seus produtos</h1>
      </header>
      <main>
        <form className="addProduct" onSubmit={handleSubmit(handleCreateProdut)}>
          <Input
            register={register('nomeProduto')}
            width={""}
            heigth={""}
            placeholder={"Digite seu produto"}
            label={"Produto"}
            type={"text"}
            id={undefined}
          />
          <Input
            register={register('quantidade')}
            width={""} heigth={""} placeholder={"Digite a quantidade do produto"} label={"Quantidade"} type={"number"} id={undefined} />
    
      <footer>
        <Button
          text={"Salvar"}
          heigth={""}
          width={"10rem"}
          type={'submit'}
          id={undefined}
        />
      </footer>
        </form>
      </main>
    </Styles.ModalProduct>
  );
}
