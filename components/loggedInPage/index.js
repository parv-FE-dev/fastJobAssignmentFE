import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import HeaderIcon from "../svgs/headerIcon";
import SearchIcon from "../svgs/SearchIcon";
import DownArrow from "../svgs/downArrow";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableIcon from "../svgs/tableIcon";
import KanbanIcon from "../svgs/kanbanIcon";

const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("first_name", {
    cell: (info) => (
      <span className="font-medium text-[14px] leading-[17px] text-[#000000] pointer">
        {info.getValue()}
      </span>
    ),
    header: "First Name",
  }),
  columnHelper.accessor("last_name", {
    cell: (info) => (
      <span className="font-semibold text-[14px] leading-[17px] text-[#363A3D] pointer">
        {info.getValue()}
      </span>
    ),
    header: "Last Name",
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => (
      <span className="font-normal text-[14px] leading-[21px] text-[#363A3D]">
        {info.renderValue()}
      </span>
    ),
  }),
  columnHelper.accessor("email", {
    header: "@ Email",
    cell: (info) => (
      <span className="font-light text-[12px] leading-[15px] text-[#363A3D]">
        {info.renderValue()}
      </span>
    ),
  }),
];

function LoggedInPageContent() {
  const [searchText, setSearchText] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [isUserAuthenticated, setUserAuthenticated] = useState(false);
  const [isTableView, setTableView] = useState(true);

  const userData = useRef([]);

  const router = useRouter();

  const getCurrentUser = async () => {
    setUserAuthenticated(false);
    const currentUserApiEndPoint =
      "https://frontendtestapi.staging.fastjobs.io/auth/me";

    const response = await fetch(currentUserApiEndPoint, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((resData) => {
        if (resData.statusCode === 401) {
          router.push("/");
        } else {
          setUserAuthenticated(true);
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getData = async () => {
    const dataApiEndPoint = "https://frontendtestapi.staging.fastjobs.io/data";
    const headerObject = {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    };

    const response = await fetch(dataApiEndPoint, {
      method: "GET",
      credentials: "include",
      headers: headerObject,
    })
      .then((response) => response.json())
      .then((resData) => {
        userData.current = resData;
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const table = useReactTable({
    data: filterData,
    columns,
    state: {
      sorting,
    },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  const searchData = (search) => {
    setFilterData(() => {
      const searchedUser = userData.current.filter((val) => {
        return (
          val.first_name.toLowerCase().includes(search.toLowerCase()) || val.last_name.toLowerCase().includes(search.toLowerCase())
        );
      });
      return searchedUser;
    });
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      searchData(searchText);
    }, 500);
    return () => clearTimeout(getData);
  }, [searchText]);

  useEffect(() => {
    getCurrentUser();
    getData();
  }, []);

  return isUserAuthenticated ? (
    <div className="container mt-[80px]">
      <div className="flex items-center">
        <div className="font-semibold text-[32px] leading-[39px] text-[#363A3D] mr-[8px] underline underline-offset-[6px] decoration-[2px]">
          Graphic Designer
        </div>
        <div>
          <HeaderIcon />
        </div>
      </div>
      <div className="mt-[24px] max-w-[85%] loggedInFontFamily">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[16px] font-semibold text-[14px] leading-[17px]">
            <div
              className="flex items-center gap-[8px] relative cursor-pointer"
              onClick={() => setTableView(true)}
            >
              <TableIcon />
              <div
                className={`font-semibold text-[14px] leading-[17px] ${
                  isTableView ? "opacity-1" : "opacity-[0.5]"
                }`}
              >
                Table view
              </div>
              {isTableView && (
                <div className="absolute bottom-[-15px] border-b-[2px] border-[#363A3D] min-w-[100px]"></div>
              )}
            </div>
            <div
              className="flex items-center gap-[8px] relative cursor-pointer"
              onClick={() => setTableView(false)}
            >
              <KanbanIcon />
              <div
                className={`font-semibold text-[14px] leading-[17px] ${
                  !isTableView ? "opacity-1" : "opacity-[0.5]"
                }`}
              >
                Kanban
              </div>
              {!isTableView && (
                <div className="absolute bottom-[-15px] border-b-[2px] border-[#363A3D] min-w-[80px]"></div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-[16px] font-normal text-[14px] leading-[17px] text-[#B3B3B3]">
            <div>Sort</div>
            <div>Filter</div>
            <div className="flex items-center">
              <div className="mr-[-20px] z-[1]">
                <SearchIcon />
              </div>
              <input
                className="border-none pl-[22px] py-[5px]"
                type="text"
                placeholder="Type to search..."
                onChange={(e) => {
                  setSearchText(e.target.value);
                  searchData(searchText);
                }}
                value={searchText}
              />
            </div>
            <div className="flex items-center">
              <button className="px-[8px] py-[5px] bg-[#6776FF] text-[#ffffff] rounded-l-[4px]">
                New
              </button>
              <button className="px-[8px] py-[10.5px] bg-[#6776FF] text-[#ffffff] rounded-r-[4px] ml-[1px]">
                <DownArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isTableView && (
        <table className="w-[85%] mt-[10px] font-['Inter'] mb-[20px]">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="border-[1px] border-[#E6E6E6]"
              >
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-start font-normal text-[14px] leading-[17px] text-[#474D4F] py-[12px] pl-[24px] pr-[64px]"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none"
                            : "",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{ asc: "", desc: "" }[header.column.getIsSorted()] ??
                          null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`${
                  i % 2 === 1 ? "bg-[#FFFFFF]" : "bg-[#E6E6E6]"
                } border-x-[1px] border-b-[1px] border-[#E6E6E6]`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={`pl-[24px] pr-[64px] py-[14px]`}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  ) : null;
}

export default LoggedInPageContent;
