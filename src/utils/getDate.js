export const getDateWithFullMonth = (stringDate) => {
  if (typeof stringDate !== `string`) {
    throw new Error(`Invalid type of ${stringDate}`);
  }

  const date = new Date(stringDate);
  const month = date.toLocaleString(`en-EN`, {month: `long`});
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
};

export const getDate = (stringDate) => {
  if (typeof stringDate !== `string`) {
    throw new Error(`Invalid type of ${stringDate}`);
  }

  const date = new Date(stringDate);
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
