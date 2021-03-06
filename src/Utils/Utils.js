export const lengthCount = (len) => {
  return len?.length > 0 ? len?.length : 0;
};

export const textData = (text) => {
  return text?.split(" ").filter(Boolean);
};
