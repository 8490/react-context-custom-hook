import { createContext, useContext, useEffect, useState } from "react";

// createContext metodu ile bir Context oluşturup sonraki kullanimlar için
// bunu export ettik.
export const UserContext = createContext();

//! Define a custom hook to get data from context
export function useUserContext() {
  return useContext(UserContext);
}

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
};
