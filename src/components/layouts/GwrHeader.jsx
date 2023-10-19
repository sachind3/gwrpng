import { Link } from "react-router-dom";
import { Container } from "../ui";
import LOGO from "./../../assets/logo-main.png";

const GwrHeader = () => {
  return (
    <>
      <header className="py-2 bg-white">
        <Container className={"flex items-center justify-between !max-w-7xl"}>
          <Link to="/">
            <img src={LOGO} alt="logo" width={100} />
          </Link>
        </Container>
      </header>
    </>
  );
};
export default GwrHeader;
