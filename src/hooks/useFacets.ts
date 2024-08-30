import { useState, useEffect } from "react";
import { getStoredFacets, setStoredFacets } from "@/utils/helpers";
import { type Period, type ValueType } from "@/types";
import { LOCAL_STORAGE_KEY } from "@/const";

const useFacets = () => {
  const storedFacets = getStoredFacets(LOCAL_STORAGE_KEY);

  const [period, setPeriod] = useState<Period>(
    storedFacets?.period || "monthly"
  );
  const [valueType, setValueType] = useState<ValueType>(
    storedFacets?.valueType || "margin"
  );

  useEffect(() => {
    setStoredFacets(LOCAL_STORAGE_KEY, { valueType, period });
  }, [valueType, period]);

  return {
    period,
    setPeriod,
    valueType,
    setValueType,
  };
};

export default useFacets;
