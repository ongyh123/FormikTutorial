import { useFormik } from 'formik';

const BasicForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
  });

  console.log(formik);

  return (
    <form autoComplete='off'>
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Enter your email'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor='email'>Age</label>
      <input
        id='age'
        type='number'
        placeholder='Enter your age'
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor='email'>Password</label>
      <input
        id='password'
        type='password'
        placeholder='Enter your password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <label htmlFor='email'>Confirm Password</label>
      <input
        id='confirmPassword'
        type='password'
        placeholder='Confirm Password'
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default BasicForm;
