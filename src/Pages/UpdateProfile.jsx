import React, { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [skillName, setSkillName] = useState("");
  const [userData, setUserData] = useState({});
  const [newUserData, setNewUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const[updateLoading,setUpdateLoading] = useState(false)
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
      setNewUserData({
        role: data?.user?.role,
        ["skills"]: [...data?.user?.skills],
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  async function updateUserDetails(params) {
    try {
      setSkillName("")
      setUpdateLoading(true);
      const skills = skillName.trim().split(" ");
      const form = { ...newUserData, skills: skills };
      console.log(form);

      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/update-user-details`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      setUserData({ ...userData, ...data?.updatedUser });
      console.log(data);
      setUpdateLoading(false);
    } catch (error) {
      console.log(error);
      setUpdateLoading(false);
    }
  }

  return (
    <div className="bg-zinc-800 flex h-[90vh] justify-center items-start gap-x-10 px-10">
      <div className="w-[80%] bg-zinc-700 py-10 mt-20 items-center flex flex-col rounded-md">
        <h1 className="text-3xl font-bold mb-6 border-b-1">User Details</h1>
        <h1 className="text-xl font-semibold mb-3">
          Email : {userData?.email}
        </h1>
        <div className="flex items-center gap-x-3 mb-3 w-[60%] flex-wrap gap-y-3">
          <h3 className="text-xl font-semibold">Skills :</h3>
          {userData?.skills?.length > 0 &&
            userData?.skills.map((skill, index) => (
              <p
                className="bg-zinc-500 px-3 rounded-md text-base font-semibold"
                key={index}
              >
                {skill}
              </p>
            ))}
        </div>
        <input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          type="text"
          placeholder="Add Skills"
          className="input"
        />
        <button
          onClick={updateUserDetails}
          disabled={updateLoading}
          className="btn btn-primary mt-5"
        >
          {updateLoading ? "Updating ...." : "Update"}
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
