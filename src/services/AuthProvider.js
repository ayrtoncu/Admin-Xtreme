import React,{useState} from "react";
import { appfirebase } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appfirebase);

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    userFirebase ? setCurrentUser(userFirebase) : setCurrentUser(null);
  });
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
