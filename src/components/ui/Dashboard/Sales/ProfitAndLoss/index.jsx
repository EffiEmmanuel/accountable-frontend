import { useContext, useState } from "react";
import { UserContext } from "../../";
import { LuSettings2 } from "react-icons/lu";

export default function ProfitAndLoss() {
  const { user, projects } = useContext(UserContext);

  // STATES
  const [compareWith, setCompareWith] = useState();
  const [trackingCategories, setTrackingCategories] = useState();
  const [bank, setBank] = useState();

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="w-full">
          <div className="border-[2px] rounded-xl p-10 border-[#323232] w-full">
            <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
              <p className="font-bold text-white">Account Balance</p>
            </div>

            <div className="border-[2px] rounded-xl p-10 border-[#323232] w-full flex flex-col justify-center gap-y-5 lg:flex-row lg:justify-between lg:items-center">
              <div className="flex flex-col text-center items-center justify-center">
                <small className="text-gray-500">USD</small>
                <p className="text-xl font-bold text-accountableBrightGreen">
                  $6,000
                </p>
              </div>
              <div className="flex flex-col text-center items-center justify-center">
                <small className="text-gray-500">EURO</small>
                <p className="text-xl font-bold text-white">€3,800</p>
              </div>
              <div className="flex flex-col text-center items-center justify-center">
                <small className="text-gray-500">YUAN</small>
                <p className="text-xl font-bold text-white">¥2,200</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-y-5 my-10">
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

            <div className="flex items-center gap-x-4">
              <select
                name="compare-with"
                value={compareWith}
                onChange={(e) => setCompareWith(e.target.value)}
                className="border-[#323232] border-[1px] bg-transparent text-gray-500 rounded-lg w-auto h-10 p-2 text-xs text-gray-500"
              >
                <option value="">COMPARE WITH</option>
              </select>

              <select
                name="tracking-categories"
                value={trackingCategories}
                onChange={(e) => setTrackingCategories(e.target.value)}
                className="border-[#323232] border-[1px] bg-transparent text-gray-500 rounded-lg w-auto h-10 p-2 text-xs text-gray-500"
              >
                <option value="">TRACKING CATEGORIES</option>
              </select>
            </div>

            <div className="flex items-center gap-x-4">
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

              <LuSettings2 size={28} className="text-gray-500" />
            </div>
          </div>

          {/* DUE PAYMENTS AND RECEIVABLE INVOICES */}
          <div className="flex flex-col gap-y-10 lg:flex-row lg:items-start gap-x-3">
            <div className="border-[2px] rounded-xl p-10 border-[#323232] w-full">
              <div className="flex flex-col items-start gap-y-2 lg:flex-row lg:items-center lg:justify-between mb-6">
                <p className="font-bold text-white">Profit and Loss</p>
              </div>

              {/* Due Payment Card */}
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Trial Balance</p>
                  <small className="text-accountableBrightGreen">5.54%</small>
                </div>
                <p className="text-white">$928.86</p>
              </div>
              <hr className="border-[#323232]" />
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">General Ledger</p>
                  <small className="text-accountableBrightGreen">4.21%</small>
                </div>
                <p className="text-white">$3,085.82</p>
              </div>
              <hr className="border-[#323232]" />
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Profit</p>
                  <small className="text-accountableBrightGreen">4.21%</small>
                </div>
                <p className="text-white">$730.12</p>
              </div>
              <hr className="border-[#323232]" />
              <div className="flex items-center justify-between my-7">
                <div className="flex flex-col gap-y-1">
                  <p className="text-white">Losses</p>
                  <small className="text-red-500">1.31%</small>
                </div>
                <p className="text-white">$730.12</p>
              </div>
              <hr className="border-[#323232]" />
              <button
                className="mt-7 text-gray-500 w-full text-center"
                onClick={() => {}}
              >
                Expand
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
