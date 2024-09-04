export const load = () => {
  let user;
  if (typeof window !== "undefined") {
    user = navigator.userAgent;
  }
  console.log(user);
  return { user };
};
