import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = () => {
  console.log('sibmitted');
};

const BasicForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors)

  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Enter your email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email? "input-error" : ""} // if they click out of the field, and there is an error, display the error
      />
      <label htmlFor='email'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      <label htmlFor='email'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      <label htmlFor='email'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default BasicForm;
