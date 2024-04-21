import { Outlet } from "remix";

const ContactPage = () => {
  return (
    <>
      <h1>This is contact page</h1>
      <Outlet></Outlet>
    </>
  );
};

export default ContactPage;
