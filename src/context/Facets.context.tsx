import { createContext, useMemo } from "react";
import useFacets from "@/hooks/useFacets";

interface Facets {
  children: JSX.Element[] | JSX.Element;
}

export const UserFacetsContext = createContext(
  {} as ReturnType<typeof useFacets>
);

const UseFacetsContextProvider = ({ children }: Facets) => {
  const facets = useFacets();
  const memoizedFacets = useMemo(
    () => facets,
    [facets.valueType, facets.period]
  );
  return (
    <UserFacetsContext.Provider value={memoizedFacets}>
      {children}
    </UserFacetsContext.Provider>
  );
};

export default UseFacetsContextProvider;
