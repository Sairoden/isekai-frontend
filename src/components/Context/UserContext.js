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

  const logout = () => {
    setUser(false);
    setFirstName("");
    setLastName("");
    localStorage.setItem("items", JSON.stringify(null));
    navigate("/");
  };

  if (firstName && lastName && user) {
    const items = {
      firstName,
      lastName,
      user,
    };
    localStorage.setItem("items", JSON.stringify(items));
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));

    if (items) {
      setFirstName(items.firstName);
      setLastName(items.lastName);
      setUser(true);
    }
    console.log(user);
  }, [user]);

  const value = {
    user,
    setUser,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
