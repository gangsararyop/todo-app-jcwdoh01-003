"use client";

import axios from "axios";
import * as Yup from "yup";
import { Formik } from "formik";

const formSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
});

const FormView = () => {
  return (
    <div className="w-96 mx-auto mt-10">
      <h1 className="mb-6">FORM SUBMISSION</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
        }}
        validationSchema={formSchema}
        onSubmit={async (values) => {
          try {
            const payload = { id: 4, ...values };

            await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_APPLICATION_ID}/${process.env.NEXT_PUBLIC_REST_API_KEY}/data/Accounts`,
              payload
            );

            alert("Sukses");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formikProps) => {
          const { errors, touched, handleSubmit, getFieldProps } = formikProps;

          return (
            <div className="flex flex-col gap-4">
              <div className="w-full">
                <input
                  {...getFieldProps("name")}
                  type="text"
                  placeholder="Masukkan nama"
                  className="w-full border-2 p-2"
                />

                {errors.name && touched.name && (
                  <p className="text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  {...getFieldProps("email")}
                  type="text"
                  placeholder="Masukkan email"
                  className="w-full border-2 p-2"
                />

                {errors.email && touched.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
              </div>

              <button
                type="button"
                className="cursor-pointer"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormView;
