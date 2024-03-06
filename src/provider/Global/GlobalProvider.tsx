import {
  createContext,
  useEffect,
  useCallback,
  useMemo,
  useContext,
  useState,
} from "react";
import { ChildrenType, TProviderGlobal } from "@/types";

export const initialState: TProviderGlobal = {
  isModalOpen: false,
  setIsModalOpen: () => {},
  modalType: 0,
  setModalType: () => {},
};

const GlobalContext = createContext<TProviderGlobal>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<number>(0);

  useEffect(() => {}, [isModalOpen]);
  const value = useMemo(
    () => ({ isModalOpen, setIsModalOpen, modalType, setModalType }),
    [isModalOpen, modalType]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
