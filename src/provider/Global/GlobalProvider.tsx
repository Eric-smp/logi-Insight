import {
  createContext,
  useEffect,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";
import Axios from "axios";
import {
  ChildrenType,
  TProviderGlobal,
  TCreateUser,
  TUserLogin,
} from "@/types";
import { useRouter } from "next/router";

export const initialState: TProviderGlobal = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
  handleGetUser: () => {},
  loginUser: () => {},
};

const GlobalContext = createContext<TProviderGlobal>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<number>(0);

  useEffect(() => {}, [isModalOpen]);

  const handleGetUser = useCallback(
    async ({ cnpj, nome, senha, sobrenome }: TCreateUser) => {
      const url = "./api/CreateUser/teste";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const params = {
        cnpj,
        nome,
        senha,
        sobrenome,
      };

      try {
        await Axios.post(url, params, config);
        setIsModalOpen(false);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const loginUser = useCallback(
    async ({ cnpj, senha }: TUserLogin) => {
      const url = "./api/CreateUser/loginUser";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const params = {
        cnpj,
        senha,
      };

      try {
        await Axios.post(url, params, config);
        setIsModalOpen(false);
        router.push("/home");
      } catch (error) {
        console.log("Essa conta não existe");
      }
    },
    [router]
  );

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalType,
      setModalType,
      handleGetUser,
      loginUser,
    }),
    [isModalOpen, modalType, handleGetUser, loginUser]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
