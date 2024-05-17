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
  TCreateProduct
} from "@/types";
import { useRouter } from "next/router";

export const initialState: TProviderGlobal = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
  handleGetUser: () => {},
  loginUser: () => {},
  password: "",
  setPassword: () => { },
  handleCreateProdut: () => {},
};

const GlobalContext = createContext<TProviderGlobal>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<number>(0);
  const [password, setPassword] = useState("");

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
        console.log("Deu erro");
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

  const handleCreateProdut = useCallback(async ({nomeProduto,quantidade}:TCreateProduct) => {

    const url = './api/Product/createProduct'
    const config = { 
      headers: {
        'Content-Type': 'application/json'
      }
     }
    
    const params = {
      nomeProduto,
      quantidade
    }

    try {
      await Axios.post(url, params, config);
      setIsModalOpen(false);
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }, []);

  const value = useMemo(
    () => ({
      isModalOpen,
      setIsModalOpen,
      modalType,
      setModalType,
      handleGetUser,
      loginUser,
      password,
      setPassword,
      handleCreateProdut,
    }),
    [isModalOpen, modalType, handleGetUser, loginUser, password, handleCreateProdut]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
