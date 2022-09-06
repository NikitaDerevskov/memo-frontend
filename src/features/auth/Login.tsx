import { useNavigate } from "react-router-dom";
import Api from "../../common/api";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";
import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="container h-screen flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          Api.login(values.email, values.password)
            .then(({ data }: { data: { token: string; name: string } }) => {
              /* TODO work with Bearer */
              /* TODO change to redux - just for fun */
              sessionStorage.setItem("userName", data.name);
              sessionStorage.setItem("token", `Bearer ${data.token}`);
              navigate("/main");
            })
            .catch((e: any) => {
              alert(e.response.data);
            });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().required("Required"),
        })}
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
                <h1 className="text-center">Login</h1>

                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <div className="input-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-4">
                    <label htmlFor="password">Password</label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && (
                      <div className="input-feedback">{errors.password}</div>
                    )}
                  </div>
                  <PrimaryButton type="submit" text="Sign in" />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </main>
  );
}

export default Login;
