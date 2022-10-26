import { useNavigate } from "react-router-dom";
import Api from "../../common/api";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Formik } from "formik";
import { Input } from "../utils/Input";
import * as Yup from "yup";

function Registration() {
  const navigate = useNavigate();

  return (
    <main className="container h-screen flex items-center justify-center">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          Api.registration(values.name, values.email, values.password)
            .then(({ data }: { data: { token: string; name: string } }) => {
              /* TODO remove Bearer */
              Api.setToken(data.token);
              localStorage.setItem("userName", data.name);
              localStorage.setItem("token", `Bearer ${data.token}`);
              navigate("/main");
            })
            .catch((e: any) => {
              alert(e.response.data);
            });
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="container space-y-4">
                <h1 className="text-center">Registration</h1>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="name">Name</label>
                    <Input
                      id="name"
                      placeholder="John"
                      type="text"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.name && touched.name && (
                      <div className="input-feedback text-rose-600">
                        {errors.name}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      placeholder="Email"
                      type="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback text-rose-600">
                        {errors.email}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="password">Password</label>
                    <Input
                      id="password"
                      placeholder="Password"
                      type="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback text-rose-600">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
                <PrimaryButton text="Sign in" type="submit" />
              </div>
            </form>
          );
        }}
      </Formik>
    </main>
  );
}

export default Registration;
