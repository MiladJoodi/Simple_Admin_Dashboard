"use client"

import { LineChart, PieChart } from "@mui/x-charts";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowLongDown } from "react-icons/hi2";

const page = () => {
  return (
    <main>
      {/* Top Cards Start */}
      <div className="flex items-center">
        {/* Box One Start */}
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
            Revenue
          </span>

          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">$500</span>
          </div>

          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span className="font-semibold">Compare to the last month</span>
            </div>
          </div>
        </div>
        {/* Box One End */}

        {/* Box Two Start */}
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
            Users
          </span>

          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">1000</span>
          </div>

          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span className="font-semibold">Compare to the last month</span>
            </div>
          </div>
        </div>
        {/* Box Two End */}

        {/* Box Three Start */}
        <div className="h-[250px] w-[350px] shadow-md ml-10">
          <span className="flex font-semibold items-center justify-center text-xl cursor-pointer mt-10 text-[#555]">
            Statistics
          </span>

          <div className="flex items-center justify-center mt-3">
            <span className="font-semibold">500</span>
          </div>

          <div>
            <div className="flex items-center justify-center mt-3">
              <HiArrowUp className="text-3xl text-green-700" />
              <HiArrowLongDown className="text-3xl text-red-700" />
            </div>

            <div className="flex items-center justify-center mt-3">
              <span className="font-semibold">Compare to the last month</span>
            </div>
          </div>
        </div>
        {/* Box Three End */}
      </div>
      {/* Top Cards End */}

      {/* Start Chart */}
      <div className="flex items-center shadow-md m-10">
        {/* Line Chart */}
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
          {/* Pie Chart */}
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </div>
      {/* End Chart */}

      <div className="flex items-center">
        {/* Start Box */}
          <div className="h-[400px] w-[500px] shadow-xl m-5">
            <h3 className="pl-10 font-semibold text-xl">Recent Users</h3>
            <ul className="space-y-10 p-10">
              <li>Milad Joodi</li>
              <li>Jane Joodi</li>
              <li>Lisney Joodi</li>
              <li>Rechard Joodi</li>
            </ul>
          </div>
        {/* End Box */}

        {/* Start Box */}
        <div className="h-[400px] w-[500px] shadow-xl m-5">
            <h3 className="pl-10 font-semibold text-xl">Recent Transactions</h3>
            <ul className="space-y-10 p-10">
              <li>Milad Joodi - $450</li>
              <li>Jane Joodi - $500</li>
              <li>Lisney Joodi - $600</li>
              <li>Rechard Joodi - $700</li>
            </ul>
          </div>
        {/* End Box */}

      </div>

    </main>
  );
};

export default page;
