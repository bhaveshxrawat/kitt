"use client";
import { createContext, useContext, useState } from "react";

interface UserDataProviderProps {
  whereFrom: string | undefined;
  setWhereFrom: React.Dispatch<React.SetStateAction<string>>;
  whereTo: string | undefined;
  setWhereTo: React.Dispatch<React.SetStateAction<string>>;
  departureDt: Date | undefined;
  setDepartureDt: React.Dispatch<React.SetStateAction<Date>>;
  returnDt: Date | undefined;
  setReturnDt: React.Dispatch<React.SetStateAction<Date>>;
}

const UserDataContext = createContext<UserDataProviderProps | undefined>(
  undefined
);

export const UserDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [whereFrom, setWhereFrom] = useState<string | undefined>();
  const [whereTo, setWhereTo] = useState<string | undefined>();
  const [departureDt, setDepartureDt] = useState<Date>();
  const [returnDt, setReturnDt] = useState<Date>();
  return (
    <UserDataContext.Provider
      value={{
        whereFrom,
        setWhereFrom,
        whereTo,
        setWhereTo,
        departureDt,
        setDepartureDt,
        returnDt,
        setReturnDt,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataProvider");
  }
  return context;
};
