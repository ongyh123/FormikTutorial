import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

// This Schema (name:basicSchema) is an object defined in this shape
export const basicSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'), //yup will validate if it is a string && email ("Error messge if it is not an email") && is filled
  age: yup.number().positive().integer().required('Required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'Please create a stronger password' })
    .required('Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null],"Passwords Must Match")
    .required('Required'),
});
