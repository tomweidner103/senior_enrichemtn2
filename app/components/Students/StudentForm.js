import React from "react";

const StudentForm = props => {
    const handleSubmit = props.handleSubmit
    const handleChange = props.handleChange
    const getId = props.getId
    const campus = props.campuses || []
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        <input
          onChange={handleChange}
          name="firstName"
          placeholder="firstName"
        />
      </label>
      <label htmlFor="lastName">
        <input
          onChange={handleChange}
          name="lastName"
          placeholder="lastName"
        />
      </label>
      <label htmlFor="email">
        <input onChange={handleChange} name="email" placeholder="email" />
      </label>
      <label htmlFor="campus">
        <select onChange={getId}>
          <option>--</option>
          {campus.map(campus => {
            return (
              <option key={campus.id} value={campus.name}>
                {campus.name}
              </option>
            );
          })}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
export default StudentForm;
