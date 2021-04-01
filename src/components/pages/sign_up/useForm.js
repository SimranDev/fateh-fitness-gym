//****** CUSTOM HOOK ******//
import { useState } from "react";

const useForm = (validate) => {
  const [status, setStatus] = useState("Book Trial");

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("X");

    if (errors == null) {
      console.log("Success");
    } else {
      setErrors(validate(values));
      setStatus("Booked");
      let response = await fetch(
        "https://14o28mtied.execute-api.us-east-2.amazonaws.com/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(values),
        }
      );
      console.log(response);
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};

export default useForm;
