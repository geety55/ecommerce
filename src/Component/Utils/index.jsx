const validateEmail = (input) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    input.toLowerCase()
  );
};

const validatePassword = (input) => {
  return /^(?=.{8,20}$)\D*\d/.test(input);
};


const simpleString = (str) => {
  return str.trim().split(" ").join("").toLowerCase();
}


export { validateEmail, validatePassword, simpleString };
