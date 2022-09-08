import { useLocation, useNavigate } from "react-router-dom";
import Api from "../../common/api";
import Header from "../header/Header";
import { PrimaryButton } from "../utils/PrimaryButton";
import { Input } from "../utils/Input";
import { TextArea } from "../utils/TextArea";
import { Formik } from "formik";
import * as Yup from "yup";

/* TODO add validation */
/* TODO refactor work to state from url it will be better */
function EditCard() {
  /* TODO fix type */
  const location = useLocation();
  const { folderId, id, title, content } = location.state as any;

  const navigate = useNavigate();

  return (
    <>
      <Header
        backRoute={{
          to: `/folder/${folderId}`,
          options: { state: { id: folderId } },
        }}
        pageName={`${title} card`}
      />
      <main className="container h-screen flex flex-col align-middle items-center">
        <Formik
          initialValues={{ title, content, id }}
          validationSchema={Yup.object().shape({
            title: Yup.string().required("Required"),
            content: Yup.string().required("Required"),
          })}
          onSubmit={(values) => {
            Api.editCard(values.title, values.content, values.id)
              .then(() => {
                navigate(`/folder/${folderId}`, { state: { id: folderId } });
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
                <div className="create-card-title flex flex-col space-y-4 mt-4">
                  <label htmlFor="title">Title</label>
                  <Input
                    id="title"
                    placeholder="Cuber Punk"
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
                <div className="create-card-content flex flex-col space-y-4 mt-4">
                  <label htmlFor="content">Content</label>
                  <TextArea
                    id="content"
                    placeholder="V going to change the world"
                    value={values.content}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.content && touched.content && (
                    <div className="input-feedback text-rose-600">
                      {errors.content}
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

export default EditCard;
