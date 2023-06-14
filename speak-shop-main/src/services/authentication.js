import { getUsers } from "./user-service";

export const rememberToken = (token) => {
  localStorage.setItem("token", token);
  console.log(token);
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export const checkAccount = async (gmail, password) => {
  const listUser = await getUsers();
  for (const user of listUser.data) {
    if (user.gmail === gmail && user.password === password) {
      rememberToken(user.token);
      return user.token;
    }
  }
  return 0;
};

export const withAuth = (Component) => {
  return (props) => {
    if (isLoggedIn()) {
      return <Component {...props} />;
    } else {
      return 0;
    }
  };
};
