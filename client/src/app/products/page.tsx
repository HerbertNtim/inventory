"use client";

import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(component)/Header";
import Rating from "@/app/(component)/Rating";
import CreateProductModal from "./CreateProductModal";
import numeral from "numeral";
import Image from "next/image";

type ProductFormData = {
  name: string;
  rating: number;
  stockQuantity: number;
  price: number;
};

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: products, isError, isLoading } = useGetProductsQuery();
  const [createProduct] = useCreateProductMutation();
  const handleCreateProduct = async (productData: ProductFormData) => {
    await createProduct(productData);
  };

  if (isLoading) {
    return <div className="p-5">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500">Failed to fetch products</div>
    );
  }

  return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray=500 m-2" />
          <input
            type="text"
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <Header name="Products" />

        <button
          className="flex items-center gap-1 rounded-md bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 !text-gray-200" />
          Create Product
        </button>
      </div>

      {/* BODY PRODUCTS LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {isLoading ? (
          <div className="m-5">Loading...</div>
        ) : (
          products?.map((product) => (
            <div
              key={product.productId}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={`https://s3-inventory-2024.s3.amazonaws.com/product${
                    Math.floor(Math.random() * 3) + 1
                  }.png`}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="mb-3 w-36 h-36 rounded-2xl"
                />
                <h3 className="font-semibold text-gray-900 text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-800">{product.price}</p>
                <p className="text-gray-600 mt-1 text-sm">
                  Stock: {product.stockQuantity}
                </p>
                {product.rating && (
                  <div className="flex items-center mt-1">
                    <Rating rating={product.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Products;
