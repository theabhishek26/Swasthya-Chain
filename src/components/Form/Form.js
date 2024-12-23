import React, { useState } from "react";
import "./form.css";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const account=useSelector((state)=>state.provider.account);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment,
      provider,
      medical,
      dispatch
    );
    setName(0);
    setAge(0);
    setGender(0);
    setBloodType(0);
    setAllergies(0);
    setDiagnosis(0);
    setTreatment(0);
  };
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  return (
    <div className="login-container">
      <h1></h1>
    {account?( <form onSubmit={submitHandler}>
        <h1>Patient Details</h1>

        <label htmlFor="name">Patient Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name === 0 ? "" : name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter Patient Name"
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          required
          placeholder="Select Age"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          required
          onChange={(e) => setGender(e.target.value)}
          value={gender === 0 ? "" : gender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="address">Blood type:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Select a blood type"
          value={bloodType === 0 ? "" : bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        />
        <label htmlFor="address">Allergies:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Type Allergy"
          value={allergies === 0 ? "" : allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <label htmlFor="address">Diagnosis:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Type Diagnosis"
          value={diagnosis === 0 ? "" : diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />
        <label htmlFor="address">Treatment:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Type Surgery"
          value={treatment === 0 ? "" : treatment}
          onChange={(e) => setTreatment(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>):(
        <h1>Connect the account</h1>
      )}
     
    </div>
  );
};

export default Form;
