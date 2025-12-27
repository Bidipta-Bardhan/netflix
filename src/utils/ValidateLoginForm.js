export const validateLoginForm = (name, email, password, isSignIn) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=\S+$)[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isValidName = /^.{3,}$/.test(name);
  if (!isSignIn) {
    if (!isValidName) return "Name should be atleast three charaters long";
  }
  if (!isValidEmail) return "EmailId not Valid";
  if (!isValidPassword) return "Password not Valid";
  return null;
};
