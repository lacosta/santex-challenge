export const getSlugFromURL = (url: string) => {
  return url?.split('/').pop();
};