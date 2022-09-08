import { useNavigate } from "react-router-dom";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";
import { Formik } from "formik";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function createFolder() {
  /* TODO fix type */
  const navigate = useNavigate();

  /* TODO extract basic structure of create and edit to 1 component */
  /* TODO add styles to all inputs (Maybe create 1 component for all) */
  return (
    <>
      <Header backRoute="/main" pageName="New Folder" />
      <main className="container h-screen flex flex-col align-middle items-center">
        <Formik
          initialValues={{ title: "" }}
          onSubmit={async (values) => {
            // TODO add error handling
            await Api.createFolder(values.title)
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
                  text="Create"
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

export default createFolder;
