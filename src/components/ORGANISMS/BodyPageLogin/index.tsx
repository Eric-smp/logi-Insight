import { FormLogin } from "@/components";
import * as Styles from "./styles";

export function BodyPageLogin() {
  return (
    <Styles.wrapperLogin>
      <div className="introductionAndForm">
        <div className="introductionSoftware">
          <h1>Logi Insight</h1>
          <p>
            É mais do que apenas uma ferramenta convencional de gestão de
            estoque; é uma resposta inovadora às complexidades enfrentadas pelas
            empresas na cadeia de suprimentos moderna
          </p>
        </div>
        <div className="formLogin">
          <FormLogin />
        </div>
      </div>
    </Styles.wrapperLogin>
  );
}
