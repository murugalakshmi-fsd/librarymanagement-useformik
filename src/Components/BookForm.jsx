import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../css/BookForm.css';

const BookForm = ({ initialValues, onSubmit, onCancel }) => {
  return (
    <div className="container">
      <h2 className="mt-5 mb-4">Book Form</h2>
      <Formik
        initialValues={initialValues || { title: '', author: '', isbn: '', publicationDate: '' }}
        enableReinitialize
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Title is required';
          }
          if (!values.author) {
            errors.author = 'Author is required';
          }
          if (!values.isbn) {
            errors.isbn = 'ISBN is required';
          }
          if (!values.publicationDate) {
            errors.publicationDate = 'Publication Date is required';
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
              <label htmlFor="title">Title:</label>
              <Field type="text" name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author:</label>
              <Field type="text" name="author" className="form-control" />
              <ErrorMessage name="author" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="isbn">ISBN:</label>
              <Field type="text" name="isbn" className="form-control" />
              <ErrorMessage name="isbn" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date:</label>
              <Field type="date" name="publicationDate" className="form-control" />
              <ErrorMessage name="publicationDate" component="div" className="error" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            {onCancel && <button type="button" onClick={onCancel} className="btn btn-secondary">Cancel</button>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
