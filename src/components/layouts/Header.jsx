import { Container } from "../ui";
import { Link } from "react-router-dom";
import LOGO from "./../../assets/logo-main.png";
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
    </>
  );
};
export default Header;
