import React, { useState, useCallback } from 'react';

export type TCtx = {
  chatModalVisible: boolean;
  setChatModalVisible: (value: boolean) => void;
};

const defaultState = {};
//@ts-ignore
export const SupportContext = React.createContext<TCtx>(defaultState);

export const SupportProvider = ({ children }: any) => {
  const [chatModalVisible, setChatModalVisible] = useState<boolean>(false);

  return (
    <SupportContext.Provider
      value={{
        chatModalVisible,
        setChatModalVisible,
      }}>
      {children}
    </SupportContext.Provider>
  );
};
