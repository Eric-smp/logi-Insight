import { CardProducts } from "@/components";
import { Pencil } from "lucide-react";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global/GlobalProvider";

export function BodyPageHome() {
  const { setIsModalOpen, setModalType } = useGlobal();
  return (
    <Styles.BodyHome>
      <div className="Content">
        <CardProducts />
      </div>
      <span
        onClick={() => {
          setIsModalOpen(true), setModalType(1);
        }}
      >
        <Pencil color="#fff" />
      </span>
    </Styles.BodyHome>
  );
}
