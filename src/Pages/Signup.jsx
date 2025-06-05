import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: ""});
  const [skillName, setSkillName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("form data", form);
    console.log(import.meta.env.VITE_SERVER_URL);
    let skills = skillName.trim().split(" ")
    console.log(skills);
    setForm((prev) => ({ ...prev, ["skills"]:[...skills] }));
    console.log("Form", form);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      console.log(res);
      const data = await res.json();
      console.log("data after create account", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);
        navigate("/");
      } else {
        alert(data.message || "signup failde");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <form className="card-body">
          <h2 className="card-title justify-center">Sign Up</h2>
          <h2 className="px-2">Email</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered text-base"
            value={form.email}
            onChange={handleChange}
            required
          />
          <h2 className="px-2">Password</h2>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered text-base"
            value={form.password}
            onChange={handleChange}
            required
          />
          <h2 className="px-2">Skills</h2>
          <div className="flex items-center gap-x-3">
            <input
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              type="text"
              placeholder="Add Skills"
              className="input input-bordered text-base"
              required
            />
          </div>

          <div className="form-control mt-4">
            <button
              onClick={handleSignup}
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
