import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  async function fetchUserDetails() {
    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/user-profile`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      console.log(data.user);
      setUserData({ ...userData, ...data?.user });
    } catch (error) {}
  }
  useEffect(() => {
    fetchUserDetails();
  }, []);

  function handleLogout() {
    localStorage.setItem("token", "");
    navigate("/login");
  }

  return (
    <div className="bg-zinc-800 flex h-[90vh] items-start gap-x-10 px-10">
      <div className="w-[70%] h-[70vh] rounded-md"></div>
      <div className="w-[30%] bg-zinc-700 py-10 mt-20 items-center flex flex-col rounded-md">
        <h1 className="text-3xl font-bold mb-3 border-b-1">USER DETAILS</h1>
        <h1 className="text-xl font-semibold mb-3">Email : {userData?.email}</h1>
        <div className="flex items-center gap-x-3 mb-3">
        <h3 className="text-xl font-semibold">Skills :</h3>
          {userData?.skills?.length > 0 &&
            userData?.skills.map((skill, index) => <p className="bg-zinc-500 px-3 rounded-md text-base font-semibold" key={index}>{skill}</p>)}
        </div>
        <Link className="btn btn-primary" to="/update-profile">
          Update
        </Link>
        <button onClick={handleLogout} className="btn btn-primary mt-3">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
