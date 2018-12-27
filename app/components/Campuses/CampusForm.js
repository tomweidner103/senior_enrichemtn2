import React from "react";

const StudentForm = props => {
  const { handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <input onChange={handleChange} name="name" placeholder="name" />
      </label>
      <label>
        <input onChange={handleChange} name="address" placeholder="address" />
      </label>
      <label htmlFor="imageUrl">
        <input name="imageUrl" onChange={handleChange} placeholder="image" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
