import { ErrorMessage, useField } from "formik";

interface IMyTextInputProps {
  label: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x: string]: any,
}
const MyTextInput = ({ label, ...props }: IMyTextInputProps) => {
  const [ field ] = useField(props); 

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props}/>
      <ErrorMessage name={props.name} component="span" />
    </>
  
  )};

export default MyTextInput;
