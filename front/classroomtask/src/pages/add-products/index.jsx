import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fill the section"),
  product: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fill the section"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fill the section"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Fill the section"),
});

const AddProduct = () => {
  return (
    <div>
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          name: "",
          product: "",
          description: "",
          price: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values ,{ resetForm }) => {

            axios.post ("http://localhost:8000/products",values);
            resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name:</label>
            <Field name="name" />
            <br />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}

            <label htmlFor="product">Product:</label>
            <Field name="product" />
            <br />
            {errors.product && touched.product ? (
              <div>{errors.product}</div>
            ) : null}

            <label htmlFor="price">Price:</label>
            <Field name="price" />
            <br />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}


            <label htmlFor="description">Description:</label>
            <Field name="description" />
            <br />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}


            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
