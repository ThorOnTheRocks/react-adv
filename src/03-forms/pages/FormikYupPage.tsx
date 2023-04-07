import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormikYupPage = () => {
  
  const { handleSubmit, errors, touched, getFieldProps} = useFormik({ initialValues: {
    firstName: "",
    lastName: "",
    email: ""
    },
    onSubmit: (values) => {
      console.log(values);
      
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                    .max(15, 'It must contains 15 characters or less')
                    .required('Required'),
      lastName:  Yup.string()
                    .max(15, 'It must contains 15 characters or less')
                    .required('Required'),
      email: Yup.string()
                .email('Must be a valid email')
                .required('Required')
    })
  });

  return (
    <div>
      <h1>Formik Yup</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email</label>
        <input type="text" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
