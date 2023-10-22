import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Container } from "../components/ui";
import Fancybox from "../components/fancybox";

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
        const approveData = res.data.records.filter((item) => {
          return item.status === "approved";
        });
        setData(approveData);
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
      <section className="py-6">
        <Container className={"!max-w-7xl"}>
          {data.length > 0 ? (
            <>
              <div className="text-xl text-white mb-4">
                Total Selfies: {data.length}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
                <Fancybox>
                  {data.map((item) => {
                    return (
                      <div key={item.id} className="bg-white shadow p-2 md:p-3">
                        <div className="aspect-square">
                          <a data-fancybox href={item.photo_url}>
                            <img
                              src={item.photo_url}
                              alt={item.participant_name}
                              className="w-full"
                            />
                          </a>
                        </div>
                        <div className="pt-2">
                          <p>{item.participant_name}</p>
                          <p>{item.city}</p>
                        </div>
                      </div>
                    );
                  })}
                </Fancybox>
              </div>
            </>
          ) : (
            "No data found"
          )}
        </Container>
      </section>
    </>
  );
};
export default Gwr;
