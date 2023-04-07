import { ErrorMessage, useField } from "formik";

interface IMyCheckboxProps {
  label: string,
  name: string,
  [x: string]: any,
}
const MyCheckbox = ({ label, ...props }: IMyCheckboxProps) => {
  const [ field ] = useField({...props, type: 'checkbox'});

  return (
    <>
      <label htmlFor={props.id || props.name}>
        <input type="checkbox" {...field} {...props}/>
        {label}
      </label>
      <ErrorMessage name={props.name} component="span"/>
    </>
  
  )};

export default MyCheckbox;
