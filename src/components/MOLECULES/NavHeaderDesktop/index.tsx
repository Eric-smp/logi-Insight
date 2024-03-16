import { Button } from "@/components";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function NavHeaderDesktop() {
  const route = useRouter();
  return (
    <Styles.navHeader>
      <h3>Sobre nós</h3>
      <h3>Fale Conosco</h3>
      <Button
        text={"sair"}
        heigth={""}
        width={"5rem"}
        type={"button"}
        id={"buttonExit"}
        backgroundColor="transparent"
        color="white"
        colorHover="white"
        onClick={() => route.push("/")}
      />
    </Styles.navHeader>
  );
}
