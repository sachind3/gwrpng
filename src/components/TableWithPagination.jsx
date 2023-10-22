import React, { useState } from "react";
import { useTable, usePagination } from "react-table";
import { Button, Input, Select } from "./ui";

const TableWithPagination = ({ data, columns, updateMyData }) => {
  const [pageIndexInput, setPageIndexInput] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    state: { pageIndex },
    nextPage,
    previousPage,
    gotoPage,
    setPageSize: setPageSizeManual,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize },
    },
    usePagination
  );

  const pageSizes = [5, 10, 20, 50, 100];
  const totalEntries = data.length;

  return (
    <div>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              <th>Sr. No</th>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                <td>{pageIndex * pageSize + index + 1}</td>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.column.id === "status" ? (
                        <select
                          value={cell.value}
                          onChange={(e) => {
                            updateMyData(
                              row.index,
                              "status",
                              e.target.value,
                              row
                            );
                          }}
                        >
                          <option value="pending">Pending</option>
                          <option value="approved">Approved</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination mt-4 flex gap-6 items-center">
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="btn bg-blue-600 text-white"
          >
            Previous
          </Button>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageCount}
            </strong>{" "}
          </span>
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="btn bg-blue-600 text-white"
          >
            Next
          </Button>
        </div>
        <div className="flex items-center gap-2">
          Go to page:
          <Input
            className="!w-14"
            type="number"
            value={pageIndexInput}
            onChange={(e) => setPageIndexInput(e.target.value)}
          />
          <Button
            className="btn bg-blue-600 text-white"
            onClick={() => {
              const pageNumber = parseInt(pageIndexInput, 10);
              if (
                !isNaN(pageNumber) &&
                pageNumber >= 1 &&
                pageNumber <= pageCount
              ) {
                gotoPage(pageNumber - 1);
              }
            }}
          >
            Go
          </Button>
        </div>
        <div className="flex items-center gap-2">
          Show{" "}
          <Select
            value={pageSize}
            onChange={(e) => {
              setPageSizeManual(Number(e.target.value));
            }}
          >
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
          entries
        </div>
        <span>Total Entries: {totalEntries}</span>
      </div>
    </div>
  );
};

export default TableWithPagination;
