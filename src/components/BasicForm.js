import { useFormik } from 'formik';

const BasicForm = () => {
  const {values, handleBlur, handleChange} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
  });


  return (
    <form autoComplete='off'>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Enter your email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor='email'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor='email'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor='email'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default BasicForm;
