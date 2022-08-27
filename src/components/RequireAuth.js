import React, { useState } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
  const [uid, setUid] = useState(null) // user id

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
      if (user) {
          setUid(user.uid)
          console.log(uid);
      } else {
          setUid(null)
          console.log("Not logged in")
      }
  });
  return uid !== null ? children : <Navigate to="/login" replace />;
}

export default RequireAuth