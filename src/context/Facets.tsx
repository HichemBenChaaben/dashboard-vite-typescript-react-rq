import { createContext } from "react";
import useFacets from "@/hooks/useFacets";

interface Facets {
  children: JSX.Element[] | JSX.Element;
}

export const UserFacetsContext = createContext(
  {} as ReturnType<typeof useFacets>
);

const UseFacetsContextProvider = ({ children }: Facets) => {
  return (
    <UserFacetsContext.Provider value={useFacets()}>
      {children}
    </UserFacetsContext.Provider>
  );
};

export default UseFacetsContextProvider;
