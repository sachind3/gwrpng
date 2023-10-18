import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Container } from "../components/ui";
import LOGO from "./../assets/logo-main.png";

const Gwr = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/index.php",
        {
          operation: "get",
        }
      );
      if (res.status === 200) {
        setData(res.data.records);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      <section className="py-6">
        <Container className={"max-w-7xl"}>
          {data.length && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
              {data.map((item) => {
                return (
                  <div key={item.id} className="bg-white shadow p-2 md:p-4">
                    <img src={item.photo_url} alt={item.participant_name} />
                  </div>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
};
export default Gwr;
