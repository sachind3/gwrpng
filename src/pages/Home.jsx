import { useState } from "react";
import { Button, Container, Input, Select } from "../components/ui";
import toast from "react-hot-toast";

const Home = () => {
  const [user, setUser] = useState({
    fullName: "",
    city: "",
    cluster: "",
    photo: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Success");
  };
  const isValid = [
    user.fullName.trim().length,
    user.city.trim().length,
    user.cluster.trim().length,
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
          <Button
            type="submit"
            className={"bg-blue-600 text-white disabled:opacity-50"}
            disabled={!isValid}
          >
            Submit
          </Button>
        </form>
      </Container>
    </section>
  );
};
export default Home;
