const createEnv = () => {
  const envVars = Object.entries(import.meta.env).reduce((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_APP_')) {
      acc[key.replace('VITE_APP_', '')] = value;
    }
    return acc;
  }, {});

  return envVars;
};

export const env = createEnv();
