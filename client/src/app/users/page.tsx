"use client";

import { useGetUsersQuery } from "@/state/api";
import Header from "@/app/(component)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Users = () => {
  const { data: users, isError, isLoading } = useGetUsersQuery();

  const columns: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  if (isLoading) {
    return <div className="p-5">Loading...</div>;
  }

  if (isError || !users) {
    return (
      <div className="text-center text-red-500">Failed to fetch users</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Users" />

      <DataGrid 
        rows={users}
        columns={columns}
        getRowId={(row) => row.userId}
        checkboxSelection
        className="bg-white shadow-md rounded-lg border border-gray-200 !text-gray-700 mt-5"
      />
    </div>
  );
};

export default Users;
