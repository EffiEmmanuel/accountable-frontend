import { useContext, useState } from "react";
import { UserContext } from "..";

// Icons
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import services from "../../../../assets/icons/services.svg";
import bill from "../../../../assets/icons/bill.svg";
import incomeStatement from "../../../../assets/icons/income-statement.svg";
import paymentMethod from "../../../../assets/icons/payment-method.svg";

export default function Transactions() {
  const { user, projects } = useContext(UserContext);

  // STATES
  const [isOneMonth, setIsOneMonth] = useState();
  const [isThreeMonths, setIsThreeMonths] = useState();
  const [isSixMonths, setIsSixMonths] = useState();
  const [isOneYear, setIsOneYear] = useState(true);
  const [bank, setBank] = useState();

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
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-[#323232] text-white rounded-lg w-28 h-10 p-2 text-sm text-gray-500"
              onClick={() => {}}
            >
              Back
            </button>

            <p>Transaction</p>

            <button
              className="bg-accountableBrightGreen text-white rounded-lg w-28 h-10 p-2 text-sm"
              onClick={() => {}}
            >
              Back
            </button>
          </div>
        </div>
        <div className="w-full p-10 border-[2px] border-[#323232] shadow-md rounded-xl mt-10">
          <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
            <p className="font-bold text-white">Recent Transactions</p>
          </div>
          <div className="flex flex-col gap-y-3 items-start lg:flex-row lg:items-center gap-x-5 my-5">
            <div className="flex lg:flex-row lg:items-center lg:justify-between w-full flex-col gap-y-5">
              <select
                name="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="border-[#323232] border-[1px] bg-transparent text-gray-500 rounded-lg w-auto h-10 p-2 text-xs text-gray-500"
              >
                <option value="">SELECT BANK</option>
                <option value="as-of-today">As of today</option>
                <option value="this-month">This month</option>
                <option value="this-quarter">This quarter</option>
                <option value="this-year">This year</option>
                <option value="this-year-to-date">This year to date</option>
                <option value="last-month">Last month</option>
                <option value="last-quarter">Last quarter</option>
                <option value="last-year">Last year</option>
              </select>

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

          <div className="flex items-center justify-center lg:justify-between flex-wrap">
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
            <div className="p-5 rounded-xl border-[2px] border-[#323232] h-20 w-[310px] flex items-center justify-between">
              <div className="flex items-center gap-x-2">
                <div className="h-14 w-14 bg-[#323232] rounded-lg  flex items-center justify-center">
                  <AiOutlineArrowDown
                    size={24}
                    className="text-accountableBrightGreen rotate-45"
                  />
                </div>

                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                    Pacific Stereo
                  </p>
                </div>
              </div>

              <p className="font-semibold text-xl">$1,280</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
