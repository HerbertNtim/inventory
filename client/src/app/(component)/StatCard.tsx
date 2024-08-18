import { LucideIcon } from "lucide-react";
import React from "react";

type StatDetails = {
  title: string;
  amount: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetails[];
  dateRange: string;
};

const StatCard = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: StatCardProps) => {
  const formattedPercentage = (value: number) => {
    const signal = value >= 0 ? "+" : "";

    return `${signal}${value.toFixed()}%`;
  };

  const getChangeColor = (value: number) => {
    return value >= 0 ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="md:row-span-1 xl:row-span-2 col-span-1 flex flex-col justify-between bg-white rounded-2xl shadow-md px-7">
      {/* HEADER */}
      <div>
        <div className="flex items-center justify-between px-5 mb-2 pt-4">
          <h2 className="text-lg font-semibold text-gray-500">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex mb-6 items-center justify-around gap-4 px-5">
        <div className="rounded-full p-4 bg-blue-50 border-sky-300 border-[1px] it">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">{detail.title}</span>
                <span className="font-bold text-gray-800">{detail.amount}</span>
                <div className="flex items-center">
                  <detail.IconComponent
                    className={`w-4 h-4 mr-1 ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  />

                  <span
                    className={`font-medium ${getChangeColor(
                      detail.changePercentage
                    )}`}
                  >
                    {formattedPercentage(detail.changePercentage)}
                  </span>
                </div>

                {index < details.length - 1 && <hr />}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
