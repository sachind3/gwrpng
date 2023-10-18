import { Container } from "../components/ui";
import LOGO from "./../assets/logo-main.png";

const Admin = () => {
  return (
    <>
      <header className="py-2 bg-white">
        <Container className={"max-w-7xl flex items-center justify-between"}>
          <img src={LOGO} alt="logo" width={100} />
        </Container>
      </header>
      <div className="py-1 bg-sky-600 shadow text-white text-xl text-bold">
        <Container className={"max-w-7xl text-center"}>
          Largest online photo album of people wearing a pin badge
        </Container>
      </div>
    </>
  );
};
export default Admin;
