export const sortBy = (list, property) => [...list].sort((a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);
