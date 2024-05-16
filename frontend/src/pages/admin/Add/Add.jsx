import { Formik } from 'formik';
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import MainContext from '../../../context/context';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Add = () => {
  const { data, setData } = useContext(MainContext)
  return (
    <>
      <Helmet>
        <title>Shoppers - Add</title>
      </Helmet>
      <Formik
        initialValues={{ title: '', image: '', description: '', price: '' }}
        validate={values => { }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:3000/products', {
            id: uuidv4(),
            title: values.title,
            image: values.image,
            description: values.description,
            price: values.price
          }).then(res => {
            setData([...data, res.data])
          })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <input
              type="text"
              name="image"
              placeholder='image'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <input
              type="text"
              name="description"
              placeholder='description'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <input
              type="number"
              name="price"
              placeholder='price'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Add