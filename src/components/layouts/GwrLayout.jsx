import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Container, Loader } from "../ui";
import GwrHeader from "./GwrHeader";
const GwrLayout = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      <GwrHeader />
      <section className="pt-3">
        <Container className={"!max-w-7xl"}>
          <h4 className="text-white uppercase text-xl text-center font-bold">
            Largest online photo album of people wearing a pin badge
          </h4>
        </Container>
      </section>
      <Outlet />
      <Loader isLoading={isLoading} />
    </>
  );
};
export default GwrLayout;
