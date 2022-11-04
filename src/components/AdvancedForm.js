// Formik Component Example

import { Field, Form, Formik } from 'formik';
import CustomInput from './CustomInput';

const AdvancedForm = () => {
  return (
    <Formik initialValues={{ username: 'jared' }}>
      {(props) => (
        <Form>
          <CustomInput 
           label="Username"
           name="username"
           type="text"
           placeholder="Enter your username"
           />
          
          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
