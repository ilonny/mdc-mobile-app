import React, { useState, useCallback } from 'react';

export type TCtx = {
  vehicleType?: string;
  setVehicleType: (vehicleType: string | undefined) => void;
  vehicleTypeId?: string;
  setVehicleTypeId: (vehicleType: string | undefined) => void;

  mark?: string;
  setMark: (mark: string | undefined) => void;
  markId?: string;
  setMarkId: (vehicleType: string | undefined) => void;

  powerFrom?: string;
  setPowerFrom: (powerFrom: string | undefined) => void;
  powerTo?: string;
  setPowerTo: (powerTo: string | undefined) => void;

  clearFilterContext: () => void;
};

const defaultState = {};
//@ts-ignore
export const FilterContext = React.createContext<TCtx>(defaultState);

export const FilterProvider = ({ children }: any) => {
  const [vehicleType, setVehicleType] = useState<string | undefined>();
  const [vehicleTypeId, setVehicleTypeId] = useState<string | undefined>();

  const [mark, setMark] = useState<string | undefined>();
  const [markId, setMarkId] = useState<string | undefined>();

  const [powerFrom, setPowerFrom] = useState<string | undefined>();
  const [powerTo, setPowerTo] = useState<string | undefined>();

  const clearFilterContext = useCallback(() => {
    setVehicleType(undefined);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        vehicleType,
        setVehicleType,
        vehicleTypeId,
        setVehicleTypeId,
        mark,
        setMark,
        markId,
        setMarkId,
        clearFilterContext,
        powerFrom,
        setPowerFrom,
        powerTo,
        setPowerTo,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
