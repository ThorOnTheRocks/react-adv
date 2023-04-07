import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

const RegisterPage = () => {
  const { formData, handleChange, isValidEmail, name, email, password1, password2 } = useForm({
    name: "", 
    email: "", 
    password1: "", 
    password2: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        {name.trim().length <= 0 && <span>This field is mandatory</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        {!isValidEmail(email) && <span>This field is mandatory</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={(e) => handleChange(e)}
        />
        {password1.trim().length <= 0 && <span>This field is mandatory</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>Password must contains 6 characters.</span>}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          value={password2}
          onChange={(e) => handleChange(e)}
        />
        {password2.trim().length <= 0 && <span>This field is mandatory</span>}
        {password2.trim().length > 0 && password1 === password2 && <span>Password must contains 6 characters.</span>}
        <button type="submit">Create</button>
      </form>
    </div>
    );
};

export default RegisterPage;
