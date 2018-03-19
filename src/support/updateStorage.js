export const updateStorage = (storage, key) => (values) => storage.setItem(
    key,
    JSON.stringify(values)
);
