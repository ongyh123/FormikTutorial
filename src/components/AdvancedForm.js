// Formik Component Example

import { Field, Form, Formik } from 'formik';
import { advancedSchema } from '../schemas';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: '', jobType: '', acceptedTos: false }}
      validationSchema={advancedSchema}
    >
      {(props) => (
        <Form>
          <CustomInput
            label='Username'
            name='username'
            type='text'
            placeholder='Enter your username'
          />
          <CustomSelect
            label='Job Type'
            name='jobType'
            placeholder='Please select a job'
          >
            
          </CustomSelect>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default AdvancedForm;
