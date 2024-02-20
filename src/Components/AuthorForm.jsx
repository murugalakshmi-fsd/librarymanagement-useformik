import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../css/AuthorForm.css';

const AuthorForm = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Author Form</h2>
      <Formik
        initialValues={initialValues || { name: '', birthDate: '', biography: '' }}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Name is required';
          }
          if (!values.birthDate) {
            errors.birthDate = 'Birth Date is required';
          }
          if (!values.biography) {
            errors.biography = 'Biography is required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="my-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="birthDate">Birth Date:</label>
              <Field type="date" name="birthDate" className="form-control" />
              <ErrorMessage name="birthDate" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="biography">Biography:</label>
              <Field as="textarea" name="biography" className="form-control" />
              <ErrorMessage name="biography" component="div" className="error" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            {onCancel && <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthorForm;
