"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/reducer/userReducer";

function Dashboard() {
  const userData = useSelector(selectUser);
  const [user, setUser] = useState(null);

  console.log("userData : ", userData);
  console.log("user : ", user);

  useEffect(() => {
    setUser(userData.userData.nik);
  }, [user]);

  return <>hello</>;
}

export default Dashboard;
