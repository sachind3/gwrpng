import { useContext, useState } from "react";
import { Button, Container, Input, Select } from "../components/ui";
import toast from "react-hot-toast";
import { AppContext } from "../context";
import axios from "axios";
import { urltoFile } from "../utils";

const Home = () => {
  const { openPic, setOpenPic, setIsLoading } = useContext(AppContext);
  const [user, setUser] = useState({
    designation: "",
    participant_name: "",
    emp_name: "",
    area: "",
    zone: "",
    city: "",
    cluster: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadData();
  };

  async function uploadData() {
    setIsLoading(true);
    let file = await urltoFile(openPic.image, "image.jpeg");
    let convertedImg = new FormData();
    convertedImg.append("upload_file", file);
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/file_upload.php",
        convertedImg,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        uploadInfo(res.data.filename);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    }
  }

  async function uploadInfo(filename) {
    try {
      const res = await axios.post(
        "https://backend-pandggwr.solmc.in/index.php",
        {
          operation: "save",
          emp_name: "",
          zone: user.zone,
          area: user.area,
          participant_name: `${user.designation} ${user.participant_name}`,
          city: user.city,
          cluster: user.cluster,
          photo_url: filename,
        }
      );
      if (res.status === 200) {
        setIsLoading(false);
        toast.success("Data Successfully uploaded");
        setUser({
          designation: "",
          participant_name: "",
          emp_name: "",
          area: "",
          zone: "",
          city: "",
          cluster: "",
        });
        setOpenPic({ show: false, image: null });
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
      console.log(error);
    }
  }
  const isValid = [
    user.designation.trim().length,
    user.participant_name.trim().length,
    // user.emp_name.trim().length,
    user.area.trim().length,
    user.city.trim().length,
    user.cluster.trim().length,
    openPic.image !== null,
  ].every(Boolean);
  return (
    <section className="py-4">
      <Container>
        <form onSubmit={handleSubmit} className="space-y-3 bg-white p-4 shadow">
          <Select
            defaultValue={user.designation}
            label={"Designation of Participant"}
            value={user.fullName}
            onChange={(e) => setUser({ ...user, designation: e.target.value })}
          >
            <option value={""} disabled>
              ---Select---
            </option>
            <option value={"Dr."}>Dr.</option>
            <option value={"Mr."}>Mr.</option>
            <option value={"Mrs."}>Mrs.</option>
            <option value={"Ms."}>Ms.</option>
          </Select>
          <Input
            label={"Name of the Participant"}
            value={user.participant_name}
            onChange={(e) =>
              setUser({ ...user, participant_name: e.target.value })
            }
          />
          <Input
            label={"Your City"}
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
          />
          <Input
            label={"Your Area"}
            value={user.area}
            onChange={(e) => setUser({ ...user, area: e.target.value })}
          />
          <Input
            label={"Your Zone"}
            value={user.zone}
            onChange={(e) => setUser({ ...user, zone: e.target.value })}
          />
          <Select
            label={"Your Cluster"}
            defaultValue={user.cluster}
            onChange={(e) => setUser({ ...user, cluster: e.target.value })}
          >
            <option value={""} disabled>
              ---Select---
            </option>
            <option value={"cluster 1"}>Cluster 1</option>
            <option value={"cluster 2"}>Cluster 2</option>
            <option value={"cluster 3"}>Cluster 3</option>
            <option value={"cluster 4"}>Cluster 4</option>
            <option value={"cluster 5"}>Cluster 5</option>
            <option value={"cluster 6"}>Cluster 6</option>
            <option value={"cluster 7"}>Cluster 7</option>
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
