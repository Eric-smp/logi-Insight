import { Button } from "@/components";
import * as Styles from "./styles";

export function NavHeaderDesktop() {
  return (
    <Styles.navHeader>
      <h3>Sobre nós</h3>
      <h3>Serviços</h3>
      <h3>Fale Conosco</h3>
      {/* <Button
        text={"sair"}
        heigth={""}
        width={"5rem"}
        type={"button"}
        id={"buttonExit"}
      /> */}
    </Styles.navHeader>
  );
}
