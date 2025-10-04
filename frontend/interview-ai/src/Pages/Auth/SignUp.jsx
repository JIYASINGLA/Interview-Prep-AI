import React, { useState } from "react";
import Input from "../../components/Inputs/Input"; // ✅ Import Input
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl="";
    if (!fullName) {
      setError("Please enter full name");
      return;
    }

    if(!validateEmail(email)){
      setError("Please enter a valid email")
      return;
    }

    if (!password) {
      setError("Please enter the passsword");
      return;
    }
    setError("");
    try{

    } catch(error){
      if(error.response && error.response.data.message) {
        setError(error.response.data.message);
      }else{
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#FFFCEF] px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 relative">
        <h3 className="text-2xl font-bold text-[#FF9324] text-center">
          Create an Account 📝
        </h3>
        <p className="text-sm text-gray-700 text-center mt-1 mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <Input
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            label="Full Name"
            placeholder="John"
            type="text"
          />
          <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white font-semibold hover:from-[#e99a4b] hover:to-[#FF9324] transition-all duration-300 shadow-md"
          >
            SIGN UP
          </button>

          <p className="text-sm text-gray-700 text-center mt-5">
            Already have an account?{" "}
            <button
              className="font-semibold text-[#FF9324] hover:underline"
              onClick={() => setCurrentPage("login")} // ✅ Corrected
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
