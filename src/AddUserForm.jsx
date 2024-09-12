import React, { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    position: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Make the POST request to the backend
      const response = await axios.post(
        "http://localhost:8080/api/addUser",
        formData
      );
      console.log("User added:", response.data);
      alert("User added successfully!");

      // Optionally reset the form
      setFormData({
        name: "",
        email: "",
        password: "",
        position: "",
      });
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label> Name: </label>{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>{" "}
      <div>
        <label> Email: </label>{" "}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>{" "}
      <div>
        <label> Password: </label>{" "}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>{" "}
      <div>
        <label> Position: </label>{" "}
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>{" "}
      <button type="submit"> Add User </button>{" "}
    </form>
  );
};

export default AddUserForm;
