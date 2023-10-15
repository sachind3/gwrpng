import { useContext, useState } from "react";
import { Button, Container, Input, Select } from "../components/ui";
import toast from "react-hot-toast";
import { AppContext } from "../context";

const Home = () => {
  const { openPic, setOpenPic } = useContext(AppContext);
  const [user, setUser] = useState({
    fullName: "",
    city: "",
    cluster: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Success");
  };
  const isValid = [
    user.fullName.trim().length,
    user.city.trim().length,
    user.cluster.trim().length,
    openPic.image !== null,
  ].every(Boolean);
  return (
    <section className="py-4">
      <Container>
        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 shadow">
          <Input
            label={"Full Name"}
            value={user.fullName}
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <Input
            label={"City"}
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
          <Select
            label={"Select Cluster"}
            defaultValue={user.cluster}
            onChange={(e) => setUser({ ...user, cluster: e.target.value })}
          >
            <option value={""} disabled>
              ---Select---
            </option>
            <option value={"clustor 1"}>Clustor 1</option>
            <option value={"clustor 2"}>Clustor 2</option>
            <option value={"clustor 3"}>Clustor 3</option>
            <option value={"clustor 4"}>Clustor 4</option>
            <option value={"clustor 5"}>Clustor 5</option>
            <option value={"clustor 6"}>Clustor 6</option>
            <option value={"clustor 7"}>Clustor 7</option>
            <option value={"not applicable"}>Not Applicable</option>
          </Select>

          {openPic.image ? (
            <div
              className="border-dashed border-2 border-theme-blue rounded w-[50%] pt-[50%] h-0 mx-auto overflow-hidden relative block"
              onClick={() => {
                setOpenPic({
                  show: true,
                  image: null,
                });
              }}
            >
              <div className="text-center absolute top-0 left-0 w-full h-full block text-theme-blue">
                <img src={openPic.image} alt="user" className="w-full h-full" />
                <div className="absolute bottom-0 left-0 w-full bg-gray-900/75 text-white p-2">
                  Edit
                </div>
              </div>
            </div>
          ) : (
            <div
              className="border-dashed border-2 border-theme-blue rounded w-[50%] pt-[50%] h-0 mx-auto overflow-hidden relative block"
              onClick={() => {
                setOpenPic({
                  show: true,
                  image: null,
                });
              }}
            >
              <div className="text-center absolute  top-0 left-0 w-full h-full flex items-center justify-center text-theme-blue">
                <svg
                  className="svg-icon text-[4rem]"
                  viewBox="0 0 20 20"
                  width="143"
                  height="143"
                >
                  <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg>
                <div className="absolute bottom-0 left-0 w-full bg-gray-900/90 text-white p-2 text-sm">
                  Upload Photo
                </div>
              </div>
            </div>
          )}
          <div className="text-center">
            <Button
              type="submit"
              className={"bg-blue-600 text-white disabled:opacity-50"}
              disabled={!isValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};
export default Home;
