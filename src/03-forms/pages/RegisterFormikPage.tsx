import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';
import '../styles/styles.css';

const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: ""
        }}
        onSubmit={(values) => {
          console.log(values);
          
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .min(2, 'It must contains 2 characters or more')
                        .max(15, 'It must contains 15 characters or less')
                        .required('Required'),
          lastName:  Yup.string()
                        .max(15, 'It must contains 15 characters or less')
                        .required('Required'),
          email: Yup.string()
                    .email('Must be a valid email')
                    .required('Required'),
          password: Yup.string()
                    .min(6, 'It must contains 6 characters or more')
                    .required('Password is required'),
          passwordConfirmation: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    
        })}
      >
        {({handleReset}) => (
            <Form>
                <MyTextInput label='First Name' name="firstName" placeholder="Gianluca" />
                <MyTextInput label='Last Name' name="lastName" placeholder='Galota'/>
                <MyTextInput label='Email' name="email" placeholder='johndoe@aol.com' type='email'/>
                <MyTextInput label='Password' name="password" placeholder='password' type='password'/>
                <MyTextInput label='Repeat Password' name="passwordConfirmation" placeholder='repeat password' type='password'/>
                <button type="submit">Create</button>
                <button type="button" onClick={handleReset}>Reset Form</button>
            </Form>
          )}
      </Formik>
    </div>
    );
};

export default RegisterFormikPage;
