import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { addJoke } from "../actions";
import "./Add.css";

const Add = function Component() {
  const dispatch = useDispatch();
  const { jokesUserArchive } = useSelector((state) => state);
  return (
    <Formik
      enableReinitialize
      initialValues={{ text: "", id: jokesUserArchive.length }}
      validate={(values) => {
        const errors = {};
        if (!values.text) {
          errors.text = "Required!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          dispatch(addJoke(values));
          setSubmitting(false);
          resetForm();
        }, 400);
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
      }) => (
        <form className="form-box" onSubmit={handleSubmit}>
          <textarea
            placeholder="Write nice Joke!"
            rows="10"
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <button className="button" type="submit" disabled={isSubmitting}>
            <span>Add</span>
          </button>
          {errors.text && touched.text && errors.text}
        </form>
      )}
    </Formik>
  );
};

export default Add;
