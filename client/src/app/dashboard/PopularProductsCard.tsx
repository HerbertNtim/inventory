import { useGetDashboardMetricsQuery } from "@/state/api";
import React from "react";
import Rating from "../(component)/Rating";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

const PopularProductsCard = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />

          <div className="overflow-auto h-full">
            {dashboardMetrics?.popularProducts.map((product) => (
              <div
                key={product.productId}
                className="flex justify-between items-center gap-3 px-5 py-7 border-b"
              >
                <div className="flex justify-between items-center gap-4">
                  <Image
                    src={`https://s3-inventory-2024.s3.amazonaws.com/product${
                      Math.floor(Math.random() * 3) + 1
                    }.png`}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="w-14 h-14 rounded-lg "
                  />
                  <div className="flex flex-col justify-between gap-1">
                    <h6 className="font-semibold text-gray-700">
                      {product.name}
                    </h6>
                    <div className="flex text-sm items-center">
                      <p className="font-semibold text-blue-500 text-xs">
                        ${product.price}
                      </p>
                      <span className="mx-2">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-xs">
                  <button className="bg-blue-100 text-blue-700 rounded-full p-2 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PopularProductsCard;
