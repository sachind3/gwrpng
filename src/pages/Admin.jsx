import TableWithPagination from "../components/TableWithPagination";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AdminContext } from "../context";
import { Container } from "../components/ui";
import Fancybox from "../components/fancybox";

const Admin = () => {
  const { records, actionUpdateRecord } = useContext(AdminContext);

  const columns = useMemo(
    () => [
      {
        Header: "Participant Name",
        accessor: "participant_name",
      },
      {
        Header: "Cluster",
        accessor: "cluster",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Area",
        accessor: "area",
      },
      {
        Header: "Zone",
        accessor: "zone",
      },
      {
        Header: "Image",
        accessor: "photo_url",
        Cell: ({ row }) => {
          return (
            <a href={row.values.photo_url} data-fancybox>
              <img src={row.values.photo_url} alt="selfie image" width={60} />
            </a>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row, updateMyData }) => {
          return (
            <select
              value={row.values.status}
              onChange={(e) =>
                updateMyData(row.index, "status", e.target.value)
              }
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          );
        },
      },
    ],
    []
  );
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    if (records.length > 0) {
      setMyData(records);
    }
  }, [records]);
  const updateMyData = (rowIndex, columnId, value, row) => {
    const updatedData = [...records];
    updatedData[rowIndex][columnId] = value;
    setMyData(updatedData);
    actionUpdateRecord(row.original.id, value);
  };
  return (
    <section className="py-6">
      <Container className={"!max-w-7xl"}>
        <div className="bg-white p-4 shadow">
          <Fancybox>
            <TableWithPagination
              columns={columns}
              data={myData}
              updateMyData={updateMyData}
            />
          </Fancybox>
        </div>
      </Container>
    </section>
  );
};
export default Admin;
