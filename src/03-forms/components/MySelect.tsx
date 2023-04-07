import { ErrorMessage, useField } from "formik";

interface IMySelectProps {
  label: string,
  name: string,
  placeholder?: string,
  [x: string]: any,
}
const MySelect = ({ label, ...props }: IMySelectProps) => {

  const [ field ] = useField(props); 

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}/>
      <ErrorMessage name={props.name} component="span" />
    </>
  
  )};

export default MySelect;
