export const updateStorage = (storage, key) => (values) => localStorage.setItem(key, JSON.stringify(values))
