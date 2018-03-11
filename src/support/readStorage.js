export const readStorage = (storage, key) => (defaultValue) => storage.getItem(key)
    ? JSON.parse(storage.getItem(key))
    : defaultValue;
