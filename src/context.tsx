import { createContext, ReactNode, useState } from "react";
//import { Address } from "ton";
import { Address } from 'everscale-inpage-provider';

interface State {
  address?: Address;
  updateAddress: (value?: Address) => void;
  isEver: boolean;
  setIsEver: (value: boolean) => void;
}

const Context = createContext({} as State);

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<Address | undefined>();
  const [isEver, setIsEver] = useState(false)

  

    const updateAddress = (value?: Address) => {
      setAddress(value)
    }

  return (
    <Context.Provider value={{ address, updateAddress, isEver, setIsEver }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
