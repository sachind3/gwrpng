import { Container } from "./ui";
import { Link } from "react-router-dom";
import LOGO from "./../assets/logo-main.png";
const Header = () => {
  return (
    <>
      <header className="py-2 bg-white">
        <Container className={"flex items-center justify-between"}>
          <Link to="/">
            <img src={LOGO} alt="logo" width={100} />
          </Link>
        </Container>
      </header>
      <div className="py-1 bg-sky-600 shadow text-white text-sm text-bold">
        <Container className={"text-center"}>
          Largest online photo album of people wearing a pin badge
        </Container>
      </div>
    </>
  );
};
export default Header;
