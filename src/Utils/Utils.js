export const lengthCount = (len) => {
  return len?.length > 0 ? len?.length : 0;
};

export const textData = (text) => {
  return text?.split(" ").filter(Boolean);
};

export const jokerCount = (text, state) => {
  const matchData = text
    ?.split(" ")
    .filter(
      (t) => t.toString().toLowerCase() === state?.toString().toLowerCase()
    );
  console.log(matchData);
};
