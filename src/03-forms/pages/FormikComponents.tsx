import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikComponents = () => {
  

  return (
    <div>
      <h1>Formik Yup</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            jobType: "",
            terms: false
          }}
          onSubmit={(values) => {
            console.log(values);
            
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
                          .max(15, 'It must contains 15 characters or less')
                          .required('Required'),
            lastName:  Yup.string()
                          .max(15, 'It must contains 15 characters or less')
                          .required('Required'),
            email: Yup.string()
                      .email('Must be a valid email')
                      .required('Required'),
            jobType: Yup.string()
                      .notOneOf(['it-junior'], "This is not a valid option")  
                      .required('Required'),
            terms: Yup.boolean()
                      .oneOf([true], 'You must accept the terms and conditions')
          })}
        >
          {(formik) => (
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text"/>
                <ErrorMessage name="firstName" component="span" />

                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text"/>
                <ErrorMessage name="lastName" component="span" />

                <label htmlFor="email">Email</label>
                <Field name="email" type="text"/>
                <ErrorMessage name="email" component="span" />

                <label htmlFor="jobType">Job Type:</label>
                <Field name="jobType" as="select">
                  <option value="">----Pick something----</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="it-senior">IT-Senior</option>
                  <option value="it-junior">IT-Junior</option>
                </Field>
                <ErrorMessage name="jobType" component="span" />

                <label htmlFor="terms">
                  <Field name="terms" type="checkbox"/>
                  Terms and conditions
                </label>

                <ErrorMessage name="terms" component="span" />

                <button type="submit">Submit</button>
            </Form>
          )}

        </Formik>

    </div>
  );
};

export default FormikComponents;
