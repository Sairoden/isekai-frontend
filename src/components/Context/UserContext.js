import { useEffect } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  user: false,
  firstName: "",
  lastName: "",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    if (firstName && lastName && user) {
      const items = {
        firstName,
        lastName,
        user,
      };
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      const items = JSON.parse(localStorage.getItem("items"));

      if (items) {
        setFirstName(items.firstName);
        setLastName(items.lastName);
        setUser(items.user);
      }
    }
  }, [user]);

  const value = {
    user,
    setUser,
    firstName,
    lastName,
    setFirstName,
    setLastName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
