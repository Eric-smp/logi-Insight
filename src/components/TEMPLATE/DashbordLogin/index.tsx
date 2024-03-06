import { HeaderLogin, BodyPageLogin, Modal } from "@/components";
import * as Styles from "./styles";

export function DashbordLogin() {
  return (
    <Styles.WrapperHome>
      <Modal />
      <HeaderLogin />
      <BodyPageLogin />
    </Styles.WrapperHome>
  );
}
