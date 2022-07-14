import React from 'react'
import styles from './WannaStudy.module.scss'
import { useForm, Controller } from 'react-hook-form'
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const WannaStudy = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, 'не больше 15 символов')
      .required('это поле обязательно для заполнения'),

      lastName: Yup.string()
      .max(20, 'не больше 20 символов')
      .required('это поле обязательно для заполнения'),

      email: Yup.string()
      .email('неправильный адрес электронной почты')
      .required('это поле обязательно для заполнения'),
    }),
      
    
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values)
      
    },
  });

  

  console.log(formik.values);

  return (
    <section>
      <div className="container">
        <p className={styles.instruction}>Заполните форму и мы свяжемся с вами</p>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.formWrapper}>
              <div className={styles.inputContainer}>
                <input
                className={styles.input}
                id='firstName'
                name='firstName'
                type='text'
                placeholder='Введите имя'
                onChange={formik.handleChange}
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName && <p className={styles.errorWarning}>{formik.errors.firstName}</p>}
              </div>

              <div className={styles.inputContainer}>
                <input 
                className={styles.input}
                id='lastName'
                name='lastName'
                type='text'
                placeholder='Введите фамилию'
                onChange={formik.handleChange}
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName && <p className={styles.errorWarning}>{formik.errors.lastName}</p>}
              </div>

              <div className={styles.inputContainer}>
                <input
                className={styles.input}
                id='email'
                name='email'
                type='email'
                placeholder='Введите электронную почту'
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && <p className={styles.errorWarning}>{formik.errors.email}</p>}
              </div>

              <button
              className={styles.sumbitBtn}
                type='submit'
                >отправить</button>
            </div>
        </form>
        
      </div>
    </section>
  )
}
