const validateInfo = (values) => {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name required";
  } else if (!/^[A-Za-z]+$/g.test(values.firstName)) {
    errors.firstName = "Invalid first name";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name required";
  } else if (!/^[A-Za-z]+$/g.test(values.lastName)) {
    errors.lastName = "Invalid last name";
  }

  if (!values.contactNumber) {
    errors.contactNumber = "Contact number required";
  } else if (!/[1-9]{1}[0-9]{9}/g.test(values.contactNumber)) {
    errors.contactNumber = "Invalid contact number";
  }

  return errors;
};

export default validateInfo;
