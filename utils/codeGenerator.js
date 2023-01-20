const codeGenerator = () => {
  const plaincode = Math.random().toString(36).slice(-5);
  return plaincode.toUpperCase();
};

export default codeGenerator;
