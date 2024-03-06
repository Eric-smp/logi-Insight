import { HeaderGlobal, BodyPageHome, Modal } from "@/components";

import * as Styles from "./styles";

export function DashbordHome() {
  return (
    <Styles.Wrapper>
      <Modal />
      <HeaderGlobal />
      <BodyPageHome />
    </Styles.Wrapper>
  );
}
