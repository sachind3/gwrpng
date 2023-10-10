import { Container } from "./ui";
import { Link } from "react-router-dom";
import LOGO from "./../assets/logao-main.svg";
const Header = () => {
  return (
    <header className="py-2 shadow bg-white">
      <Container className={"flex items-center justify-between"}>
        <Link to="/">
          <img src={LOGO} alt="logo" width={150} />
        </Link>
      </Container>
    </header>
  );
};
export default Header;
