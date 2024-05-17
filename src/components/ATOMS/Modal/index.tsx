import { ModalCreateLogin, ModalInsertProduct, ModalErrorLogin } from "@/components";
import { useGlobal } from "@/provider/Global/GlobalProvider";
import * as Styles from "./styles";

export function Modal() {
  const { isModalOpen, modalType } = useGlobal();
  const ModalList = [
    <ModalCreateLogin key="0" />,
    <ModalInsertProduct key="1" />,
    <ModalErrorLogin key='2'/>
  ];

  return (
    <Styles.Modal isOpen={isModalOpen} backgroundColorModal="#0f8beaba">
      {ModalList[modalType]}
    </Styles.Modal>
  );
}
