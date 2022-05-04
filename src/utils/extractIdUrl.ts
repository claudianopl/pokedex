export const extractIdUrl = (url: string): any => {
  const urlSplit = url.split('/');

  return urlSplit[6];
};
