import React, { useState, useCallback } from 'react';
import { Country } from 'react-native-country-picker-modal';
import { PhotoFile } from 'react-native-vision-camera';

export type TCtx = {
  country?: Country;
  city?: any;
  frontPhoto?: PhotoFile;
  backPhoto?: PhotoFile;
  selfie?: PhotoFile;
  setCountry: (country: Country) => void;
  setCity: (country: any) => void;
  setFrontPhoto: (photo: PhotoFile) => void;
  setBackPhoto: (photo: PhotoFile) => void;
  setSelfie: (photo: PhotoFile) => void;
  clearSelectContext: () => void;
};

const defaultState = {};
//@ts-ignore
export const SelectContext = React.createContext<TCtx>(defaultState);

export const SelectProvider = ({ children }: any) => {
  const [country, setCountry] = useState<Country | undefined>();
  const [frontPhoto, setFrontPhoto] = useState<PhotoFile | undefined>();
  const [backPhoto, setBackPhoto] = useState<PhotoFile | undefined>();
  const [selfie, setSelfie] = useState<PhotoFile | undefined>();
  const [city, setCity] = useState();

  const clearSelectContext = useCallback(() => {
    setCountry(undefined);
    setCity(undefined);
  }, []);

  return (
    <SelectContext.Provider
      value={{
        country,
        setCountry,
        city,
        setCity,
        clearSelectContext,
        frontPhoto,
        setFrontPhoto,
        backPhoto,
        setBackPhoto,
        selfie,
        setSelfie,
      }}>
      {children}
    </SelectContext.Provider>
  );
};
