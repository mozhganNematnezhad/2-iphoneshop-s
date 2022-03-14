import React from "react";

const Input = ({name ,label ,formik ,type="text"}) => {
  return (
    <div className="mb-3" className="w-input">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={name}
        // value={formik.values[name]}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps(name)}

      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-danger">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;















{
  /* <div className="mb-3" className="w-input">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="name"
          className="form-control"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-danger">{formik.errors.name}</div>
        )}
      </div> */
}
