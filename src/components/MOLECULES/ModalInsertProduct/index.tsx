import { X } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";

export function ModalInsertProduct() {
  const { setIsModalOpen } = useGlobal();
  return (
    <Styles.ModalProduct>
      <header>
        <span>
          <X color="#0d5bd1" onClick={() => setIsModalOpen(false)} />
        </span>
        <h1>Adicione seus produtos</h1>
      </header>
    </Styles.ModalProduct>
  );
}
