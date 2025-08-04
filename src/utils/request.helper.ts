import { AsyncLocalStorage } from "async_hooks";

type AsyncLocalStorageType = {
  correlationId: String;
};

export const asycnLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationId = () => {
  const asyncStore = asycnLocalStorage.getStore();
  return asyncStore?.correlationId || "Correlation_ID_is_not_found";
};
