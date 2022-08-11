// @packages
import { createContext } from 'react';

// @own
import useStateWithStorage from 'src/hooks/useStateWithStorage';

interface OrderProviderProps {
  children: JSX.Element,
};

const OrderContext = createContext({total: Number, setTotal: Function});

const OrderProvider = ({ children }: OrderProviderProps) => {
  const [total, setTotal] = useStateWithStorage('total', 0);

  return (
    <OrderContext.Provider value={{ total, setTotal }}>
      {children}
    </OrderContext.Provider>
  )
}

export {
  OrderContext,
  OrderProvider,
};