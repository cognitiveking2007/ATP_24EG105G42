
import { useState } from "react";
import { useForm } from "react-hook-form";

function UserForm() {
  const [users, setUsers] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //  Form submit function
  const onFormSubmit = (data) => {
    setUsers([...users, data]); // Add new user to the list
    reset(); // Clear the form after submission
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <form onSubmit={handleSubmit(onFormSubmit)} className="max-w-md mx-auto mb-10">
        <h1 className="text-5xl">Create User</h1>
        {/* firstName */}
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="border w-full p-2"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border w-full p-2"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date" 
            id="dob"
            className="border w-full p-2"
            {...register("dob", { required: "Date of Birth is required" })}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
        </div>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {/*  Displaying the List of Users */}
      <h1 className="text-2xl ">List Of Users</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th >First Name</th>
            <th >Email</th>
            <th >Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border p-2">{user.firstName}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserForm;