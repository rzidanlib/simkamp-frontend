export const generateStaticAccount = (name) => {
  const formattedDate = new Date().getFullYear();
  // const randomNumber = Math.floor(Math.random() * 10000)
  //   .toString()
  //   .padStart(4, '0');
  return {
    email: name ? `${name.toLowerCase().replace(/ /g, '')}${formattedDate}@gmail.com` : '',
    password: name ? `${name.toLowerCase().replace(/ /g, '')}${formattedDate}` : '',
  };
};
