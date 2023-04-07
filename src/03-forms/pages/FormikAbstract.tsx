import {Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput, MyCheckbox, MySelect } from '../components';

import '../styles/styles.css'

const FormikAbstractation = () => {
  
  return (
    <div>
      <h1>Formik Abstractation</h1>
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
                <MyTextInput label='First Name' name="firstName" placeholder="Gianluca" />

                <MyTextInput label='Last Name' name="lastName" placeholder='Galota'/>

                <MyTextInput label='Email' name="email" placeholder='johndoe@aol.com' type='email'/>

                <MySelect label="Job Type" name="jobType">
                  <option value="">----Pick something----</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="it-senior">IT-Senior</option>
                  <option value="it-junior">IT-Junior</option>
                </MySelect>

                <MyCheckbox label="Terms & Conditions" name="terms"/>
                
                <button type="submit">Submit</button>
            </Form>
          )}

        </Formik>

    </div>
  );
};

export default FormikAbstractation;
