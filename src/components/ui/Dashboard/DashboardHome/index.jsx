import { useContext, useState } from "react";
import { UserContext } from "..";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { PiStudentFill } from "react-icons/pi";
import { MdBook, MdClass } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";

// Icons
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import services from "../../../../assets/icons/services.svg";
import bill from "../../../../assets/icons/bill.svg";
import incomeStatement from "../../../../assets/icons/income-statement.svg";
import paymentMethod from "../../../../assets/icons/payment-method.svg";

// Register ChartJS
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
// ChartJS.defaults.borderColor = "#323232";
ChartJS.defaults.color = "#fff";

export default function DashboardHome() {
  const { user, projects } = useContext(UserContext);

  // Bar Chart Setup
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [20, 10, 20, 40, 30, 60],
        backgroundColor: "#FFD60C",
        borderWidth: 0.5,
        barThickness: 10,
        borderRadius: 200,
      },
    ],
  };

  const options = {};

  // Line chart setup
  const lineData = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEV",
    ],
    datasets: [
      {
        label: "",
        data: [
          0, 1000, 10000, 20000, 50000, 150000, 3000, 6000, 30000, 120000,
          85000, 15000,
        ],
        backgroundColor: "transparent",
        borderColor: "#0B595C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.3,
      },
      {
        label: "",
        data: [
          20000, 40000, 10000, 4000, 25500, 20000, 17000, 20000, 100000, 50000,
          20000, 150000,
        ],
        backgroundColor: "transparent",
        borderColor: "#362724",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        // min: 2,
        // max: 10,
        // ticks: {
        //   stepSize: 2,
        // },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  //   CHART DURATION STATES
  const [isOneMonth, setIsOneMonth] = useState();
  const [isThreeMonths, setIsThreeMonths] = useState();
  const [isSixMonths, setIsSixMonths] = useState();
  const [isOneYear, setIsOneYear] = useState(true);

  async function toggleChartStates(state) {
    switch (state) {
      case "one-month":
        setIsOneMonth(true);
        setIsThreeMonths(false);
        setIsSixMonths(false);
        setIsOneYear(false);
        break;
      case "three-months":
        setIsOneMonth(false);
        setIsThreeMonths(true);
        setIsSixMonths(false);
        setIsOneYear(false);
        break;
      case "six-months":
        setIsOneMonth(false);
        setIsThreeMonths(false);
        setIsSixMonths(true);
        setIsOneYear(false);
        break;
      case "one-year":
        setIsOneMonth(false);
        setIsThreeMonths(false);
        setIsSixMonths(false);
        setIsOneYear(true);
        break;
    }
  }

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
          <div className="border-[2px] border-[#323232] w-[230px] rounded-lg p-5 flex flex-col gap-y-4 justify-between items-center">
            <img
              src={services}
              alt=""
              className="w-[100px] mx-auto object-contain"
            />
            <div className="text-center">
              <p className="font-semibold uppercase text-gray-500">
                PAYMENT MATCHING & bank reconciliation
              </p>
            </div>
          </div>
          <div className="border-[2px] border-[#323232] w-[230px] rounded-lg p-5 flex flex-col gap-y-4 justify-between items-center">
            <img
              src={bill}
              alt=""
              className="w-[100px] mx-auto object-contain"
            />
            <div className="text-center">
              <p className="font-semibold uppercase text-gray-500">
                UPLOAD INVOICE & BILL
              </p>
            </div>
          </div>
          <div className="border-[2px] border-[#323232] w-[230px] rounded-lg p-5 flex flex-col gap-y-4 justify-between items-center">
            <img
              src={paymentMethod}
              alt=""
              className="w-[100px] mx-auto object-contain"
            />
            <div className="text-center">
              <p className="font-semibold uppercase text-gray-500">
                upload bank statements
              </p>
            </div>
          </div>
          <div className="border-[2px] border-[#323232] w-[230px] rounded-lg p-5 flex flex-col gap-y-4 justify-between items-center">
            <img
              src={incomeStatement}
              alt=""
              className="w-[100px] mx-auto object-contain"
            />
            <div className="text-center">
              <p className="font-semibold uppercase text-gray-500">
                advanced AI-driven report
              </p>
            </div>
          </div>
        </div>

        <div className="w-full p-10 mt-20 border-[2px] border-[#323232] shadow-md rounded-xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div className="">
              <p className="font-bold text-white">Profits & Losses</p>
              <p className="font-bold text-gray-500 uppercase">
                jan - dec 2023
              </p>
            </div>

            <div className="flex flex-col gap-y-4 items-start lg:items-end my-4 lg:my-0">
              <div className="flex items-center gap-x-4">
                <div className="flex flex-col lg:items-end gap-x-2 text-red-500">
                  <p className="font-bold text-xl">USD $3,500</p>
                  <div className="flex items-center gap-x-1">
                    <AiFillCaretDown size={15} className="" />
                    <small className="text-sm">1.3%</small>
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-x-2 text-accountableBrightGreen">
                  <p className="font-bold text-xl text-white">USD $26,500</p>
                  <div className="flex items-center gap-x-1">
                    <AiFillCaretUp size={15} className="" />
                    <small className="text-sm">9.24%</small>
                  </div>
                </div>
              </div>
              <div className="flex items-center flex-wrap gap-y-2 gap-x-2 mt-2 lg:mt-0">
                <button
                  className={`${
                    isOneMonth &&
                    "bg-accountableDarkGreen text-white border-none"
                  }  border-[1px] border-gray-500 rounded-full w-28 h-10 p-2 text-sm text-gray-500`}
                  onClick={() => toggleChartStates("one-month")}
                >
                  One Month
                </button>
                <button
                  className={`${
                    isThreeMonths &&
                    "bg-accountableDarkGreen text-white border-none"
                  }  border-[1px] border-gray-500 rounded-full w-28 h-10 p-2 text-sm text-gray-500`}
                  onClick={() => toggleChartStates("three-months")}
                >
                  Three Months
                </button>
                <button
                  className={`${
                    isSixMonths &&
                    "bg-accountableDarkGreen text-white border-none"
                  }  border-[1px] border-gray-500 rounded-full w-28 h-10 p-2 text-sm text-gray-500`}
                  onClick={() => toggleChartStates("six-months")}
                >
                  Six Months
                </button>
                <button
                  className={`${
                    isOneYear &&
                    "bg-accountableDarkGreen text-white border-none"
                  }  border-[1px] border-gray-500 rounded-full w-28 h-10 p-2 text-sm text-gray-500`}
                  onClick={() => toggleChartStates("one-year")}
                >
                  This Year
                </button>
              </div>
            </div>
          </div>

          <Line className="" data={lineData} options={lineOptions}></Line>
        </div>

        <div className="w-full p-10 border-[2px] border-[#323232] shadow-md rounded-xl mt-20">
          <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
            <p className="font-bold text-white">Transactions</p>
            <div className="flex flex-col gap-y-3 items-start lg:flex-row lg:items-center gap-x-5">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <p className="text-gray-500 text-xs">Start Date</p>
                  <div
                    className="h-10 w-24 flex justify-center items-center p-2 border-[#323232] border-[1px] rounded-lg cursor-pointer"
                    onClick={() => {}}
                  >
                    <p className="text-gray-500 text-xs">14/08/2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <p className="text-gray-500 text-xs">End Date</p>
                  <div
                    className="h-10 w-24 flex justify-center items-center p-2 border-[#323232] border-[1px] rounded-lg cursor-pointer"
                    onClick={() => {}}
                  >
                    <p className="text-gray-500 text-xs">03/03/2025</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end">
                <p className="text-xs text-gray-500">THIS MONTH</p>
                <p className="text-xl text-accountableBrightGreen">
                  $16,000.00
                </p>
                <p className="text-red-500">$3,500</p>
              </div>
            </div>
          </div>

          <hr className="border-[#323232]" />

          {/* TRANSACTIONS */}
          <div className="">
            {/* Transaction Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex flex-col gap-y-1">
                <p className="text-white">Salary</p>
                <small className="text-gray-500">May 7, 2023 10:07 am</small>
              </div>
              <div className="h-10 w-36 border-[1px] border-[#323232] rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accountableBrightGreen"></div>
                  <small className="text-white">Transportation</small>
                </div>
              </div>

              <div className="h-10 w-10 bg-[#323232] rounded-lg  flex items-center justify-center">
                <AiOutlineArrowDown
                  size={24}
                  className="text-white rotate-45"
                />
              </div>
              <p className="text-white">$3,797.96</p>
            </div>
            <div className="flex items-center justify-between my-7">
              <div className="flex flex-col gap-y-1">
                <p className="text-white">Joshua Jones</p>
                <small className="text-gray-500">May 3, 2023 4:03 am</small>
              </div>
              <div className="h-10 w-36 border-[1px] border-[#323232] rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <small className="text-white">Sofa Express</small>
                </div>
              </div>

              <div className="h-10 w-10 bg-[#323232] rounded-lg  flex items-center justify-center">
                <AiOutlineArrowUp size={24} className="text-white rotate-45" />
              </div>
              <p className="text-white">$3,933.55</p>
            </div>
            <div className="flex items-center justify-between my-7">
              <div className="flex flex-col gap-y-1">
                <p className="text-white">Joshua Jones</p>
                <small className="text-gray-500">May 3, 2023 4:03 am</small>
              </div>
              <div className="h-10 w-36 border-[1px] border-[#323232] rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <small className="text-white">Sofa Express</small>
                </div>
              </div>

              <div className="h-10 w-10 bg-[#323232] rounded-lg  flex items-center justify-center">
                <AiOutlineArrowUp size={24} className="text-white rotate-45" />
              </div>
              <p className="text-white">$3,933.55</p>
            </div>
            <div className="flex items-center justify-between my-7">
              <div className="flex flex-col gap-y-1">
                <p className="text-white">Salary</p>
                <small className="text-gray-500">May 7, 2023 10:07 am</small>
              </div>
              <div className="h-10 w-36 border-[1px] border-[#323232] rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accountableBrightGreen"></div>
                  <small className="text-white">Transportation</small>
                </div>
              </div>

              <div className="h-10 w-10 bg-[#323232] rounded-lg  flex items-center justify-center">
                <AiOutlineArrowDown
                  size={24}
                  className="text-white rotate-45"
                />
              </div>
              <p className="text-white">$3,797.96</p>
            </div>
            <div className="flex items-center justify-between my-7">
              <div className="flex flex-col gap-y-1">
                <p className="text-white">Salary</p>
                <small className="text-gray-500">May 7, 2023 10:07 am</small>
              </div>
              <div className="h-10 w-36 border-[1px] border-[#323232] rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-x-2">
                  <div className="h-2 w-2 rounded-full bg-accountableBrightGreen"></div>
                  <small className="text-white">Transportation</small>
                </div>
              </div>

              <div className="h-10 w-10 bg-[#323232] rounded-lg  flex items-center justify-center">
                <AiOutlineArrowDown
                  size={24}
                  className="text-white rotate-45"
                />
              </div>
              <p className="text-white">$3,797.96</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-20">
          {/* DUE PAYMENTS AND RECEIVABLE INVOICES */}
          <div className="flex flex-col gap-y-10 lg:flex-row lg:items-start gap-x-3">
            {/* DUE PAYMENTS */}
            <div className="border-[2px] rounded-xl p-10 border-[#323232] w-full lg:w-[35%]">
              <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="font-bold text-white">Due Payment</p>
              </div>

              <hr className="border-[#323232]" />

              {/* Due Payment Card */}
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Water Bill</p>
                  <small className="text-red-500">May 13, 2023 1:28 am</small>
                </div>
                <p className="text-white">$928.86</p>
              </div>
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Kimberly Mastrangelo</p>
                  <small className="text-red-500">May 10, 2023 7:45 pm</small>
                </div>
                <p className="text-white">$3,085.82</p>
              </div>
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Joshua</p>
                  <small className="text-red-500">May 17, 2023 3:02 pm</small>
                </div>
                <p className="text-white">$730.12</p>
              </div>
            </div>

            {/* RECEIVABLE INVOICES */}
            <div className="border-[2px] rounded-xl p-10 border-[#323232] w-full lg:w-[65%]">
              <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="font-bold text-white">Receivable Invoices</p>
              </div>

              <hr className="border-[#323232]" />

              {/* Due Payment Card */}
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Water Bill</p>
                  <small className="text-red-500">May 13, 2023 1:28 am</small>
                </div>
                <p className="text-white">$928.86</p>
              </div>
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Kimberly Mastrangelo</p>
                  <small className="text-red-500">May 10, 2023 7:45 pm</small>
                </div>
                <p className="text-white">$3,085.82</p>
              </div>
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Joshua</p>
                  <small className="text-red-500">May 17, 2023 3:02 pm</small>
                </div>
                <p className="text-white">$730.12</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
