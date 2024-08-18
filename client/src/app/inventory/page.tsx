"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/app/(component)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  const columns: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      type: "number",
      valueGetter: (value, row) => `${row.price}`,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 110,
      type: "number",
      valueGetter: (value, row) => row.rating ? row.rating : 'N/A',
    },
    {
      field: "stockQuantity",
      headerName: "Stock Quantity",
      width: 150,
      type: "number",
    },
  ];

  if (isLoading) {
    return <div className="p-5">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500">Failed to fetch products for inventory</div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />

      <DataGrid 
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow-md rounded-lg border border-gray-200 !text-gray-700 mt-5"
      />
    </div>
  );
};

export default Inventory;
