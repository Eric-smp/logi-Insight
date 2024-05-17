import { FormLogin, CardNotificationLogin } from "@/components";
import * as Styles from "./styles";

export function BodyPageLogin() {
  return (
    <Styles.wrapperLogin>
      <div className="introductionAndForm">
        <div className="introductionSoftware">
          <h1>Logi Insight</h1>
          <p>
            Logi Insight uma ferramenta de gerenciamento de logística, que ajuda na vistoria e controle de produtos.
          </p>
        </div>
        <div className="formLogin">
          <FormLogin />
        </div>
      </div>

      <CardNotificationLogin/>

    </Styles.wrapperLogin>
  );
}
