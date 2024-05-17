import { HeaderGlobal, BodyPageHome, Modal, CardNotificationProduct } from "@/components";

import * as Styles from "./styles";

export function DashbordHome() {
  return (
    <Styles.Wrapper>
      <Modal />
      <HeaderGlobal />
      <BodyPageHome />
      <CardNotificationProduct/>
    </Styles.Wrapper>
  );
}
