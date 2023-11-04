import TableWithPaginationAdmin from "../components/TableWithPaginationAdmin";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { AdminContext } from "../context";
import { Button, Container } from "../components/ui";
import Fancybox from "../components/fancybox";
import * as XLSX from "xlsx";

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

  const handleExport = () => {
    const wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(myData);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet");
    XLSX.writeFile(wb, "MyExcel.xlsx");
  };
  return (
    <section className="py-6">
      <Container className={"!max-w-7xl"}>
        <div className="bg-white p-4 shadow">
          <Button
            className={"bg-blue-600 text-white mb-4"}
            onClick={handleExport}
          >
            Export Data
          </Button>
          <Fancybox>
            <TableWithPaginationAdmin
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
