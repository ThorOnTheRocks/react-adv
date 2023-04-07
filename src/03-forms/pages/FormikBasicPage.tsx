import { FormikErrors, useFormik } from 'formik';

interface FormValues {
  firstName: string,
  lastName: string,
  email: string
}

const FormikBasicPage = () => {

  const validate = ({firstName, lastName, email}: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    
    if(!firstName) {
      errors.firstName = 'Required'
    }else if (firstName?.length >= 15) {
      errors.firstName = 'Must be 15 characters or less'
    }

    if(!lastName) {
      errors.firstName = 'Required'
    }else if (firstName?.length >= 10) {
      errors.firstName = 'Must be 10 characters or less'
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }

  const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({ initialValues: {
    firstName: "",
    lastName: "",
    email: ""
    },
    onSubmit: (values) => {
      console.log(values);
      
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Page</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
