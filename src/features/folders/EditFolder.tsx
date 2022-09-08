import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";
import { Formik } from "formik";
import * as Yup from "yup";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function editFolder() {
  /* TODO fix type */
  const navigate = useNavigate();
  const location = useLocation();

  const { title, id } = location.state as any; /* TODO add type */

  return (
    <>
      <Header backRoute="/main" pageName="New Folder" />
      <main className="container h-screen flex flex-col align-middle items-center">
        <Formik
          initialValues={{ title }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required("Required"),
          })}
          onSubmit={async (values) => {
            // TODO add error handling
            await Api.editFolder(values.title, id)
              .then(() => {
                navigate("/main");
              })
              .catch((e: any) => alert(e));
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
                <div className="edit-folder-button flex flex-col space-y-4 mt-4">
                  <label htmlFor="title">Title</label>
                  <Input
                    id="title"
                    placeholder="Cyber Punk"
                    type="text"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.title && touched.title && (
                    <div className="input-feedback text-rose-600">
                      {errors.title}
                    </div>
                  )}
                </div>
                <PrimaryButton
                  className="max-w-xs mt-4 mb-4"
                  text="Edit"
                  type="submit"
                />
              </form>
            );
          }}
        </Formik>
      </main>
    </>
  );
}

export default editFolder;
