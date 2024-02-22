export const saveToLocalStorage = (key, movies) => {
  localStorage.setItem(key, JSON.stringify(movies));
};

export const getFromLocalStorage = (key) => {
  const movies = localStorage.getItem(key);
  return movies ? JSON.parse(movies) : [];
};

export const deleteFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
