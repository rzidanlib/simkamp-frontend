const localStorageHandler = (() => {
  return {
    // Set item to local storage
    setItem: (key, value) => {
      const itemValue = JSON.stringify(value);
      localStorage.setItem(key, itemValue);
    },

    // Get item from local storage
    getItem: (key) => {
      const item = localStorage.getItem(key);
      return JSON.parse(item);
    },

    // Remove item from local storage
    removeItem: (key) => {
      localStorage.removeItem(key);
    },

    // Clear local storage
    clear: () => {
      localStorage.clear();
    },
  };
})();

export default localStorageHandler;
