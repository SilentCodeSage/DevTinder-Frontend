import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const { firstName, lastName, profileUrl, age, skills, gender,about } = user;
  const dispatch = useDispatch();

  // Set state for each input field
  const [firstNameValue, setFirstNameValue] = useState(firstName);
  const [lastNameValue, setLastNameValue] = useState(lastName);
  const [profileUrlValue, setProfileUrlValue] = useState(profileUrl);
  const [ageValue, setAgeValue] = useState(age);
  const [skillsValue, setSkillsValue] = useState(skills);
  const [genderValue, setGenderValue] = useState(gender);
  const [aboutValue, setAboutValue] = useState(about);

  const saveEdit = async (e) => {
    e.preventDefault();
    const result = await axios.patch(
      BASE_URL + "/profile/edit",
      {
        firstName: firstNameValue,
        lastName: lastNameValue,
        profileUrl: profileUrlValue,
        age: ageValue,
        skills: skillsValue,
        gender: genderValue,
        about:aboutValue,
      },
      { withCredentials: true }
    );
    dispatch(addUser(result.data));
    console.log(result);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="card bg-base-200 text-primary-content w-96 shadow-lg">
        <div className="card-body">
          <div className="w-full flex justify-center">
            <h2 className="card-title text-white">Update Profile</h2>
          </div>

          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">First Name</span>
              </label>
              <input
                type="text"
                value={firstNameValue}
                onChange={(e) => setFirstNameValue(e.target.value)}
                placeholder="Enter your first name"
                className="input text-white input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Last Name</span>
              </label>
              <input
                type="text"
                value={lastNameValue}
                onChange={(e) => setLastNameValue(e.target.value)}
                placeholder="Enter your last name"
                className="input text-white input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Profile URL</span>
              </label>
              <input
                type="text"
                value={profileUrlValue}
                onChange={(e) => setProfileUrlValue(e.target.value)}
                placeholder="Enter your profile URL"
                className="input text-white input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Age</span>
              </label>
              <input
                type="number"
                value={ageValue}
                onChange={(e) => setAgeValue(e.target.value)}
                placeholder="Enter your age"
                className="input text-white input-bordered w-full"
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Skills</span>
              </label>
              <input
                type="text"
                value={skillsValue}
                onChange={(e) => setSkillsValue(e.target.value)}
                placeholder="Enter your skills (comma-separated)"
                className="input text-white input-bordered w-full"
              />
            </div>

            {/* Gender Dropdown */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">Gender</span>
              </label>
              <select
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
              </select>
            </div>

            {/* About Field */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-white">About</span>
              </label>
              <textarea
                value={aboutValue}
                onChange={(e) => setAboutValue(e.target.value)}
                placeholder="Tell us about yourself"
                className="textarea text-white textarea-bordered w-full h-24"
              />
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full" onClick={saveEdit}>
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
