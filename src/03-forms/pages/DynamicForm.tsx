import { Formik, Form } from "formik";
import jsonForm from '../data/custom-form.json';
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

const initiaValues: {[key: string]: any} = {};
const requiredFields: {[key: string]: any} = {};

for (const input of jsonForm) {
  initiaValues[input.name] = input.value

  if (!input.validations) continue;
  
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required!')
    }
    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres`)
    }
    if (rule.type === 'email') {
      schema = schema.email('Check the email format')
    }
    // ...other rules
  }
  requiredFields[input.name] = schema;
} 

const validationSchema = Yup.object({...requiredFields});

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initiaValues}
        validationSchema={validationSchema}
        onSubmit={ (values) => {
          console.log(values)
        }}
      >
        { (formik) => (
          <>
            <Form noValidate>
              {jsonForm.map((data) => {
                if (data.type === 'input' || data.type === 'email' ) {
                  return <MyTextInput key={data.name} type={data.type as any} label={data.label} name={data.name} placeholder={data.placeholder} />
                }
                else if (data.type === 'select') {
                  return (
                  <MySelect
                    key={data.name}
                    name={data.name}
                    label={data.label}
                  >
                    <option value="">
                      Select an option:
                    </option>
                    {data.options?.map(option => {
                      return <option key={option.id} value={option.id}>{option.label}</option>
                    })}
                  </MySelect>
                )}
              })}
              <button type="submit">Submit</button>
            </Form>
          </>
        )}

      </Formik>
    </div>
  );
}

export default DynamicForm;
