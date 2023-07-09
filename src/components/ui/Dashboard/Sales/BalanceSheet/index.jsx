import { useContext, useState } from "react";
import { UserContext } from "../../";
import { LuSettings2 } from "react-icons/lu";

export default function BalanceSheet() {
  const { user, projects } = useContext(UserContext);

  //   CHART DURATION STATES
  const [compareWith, setCompareWith] = useState();
  const [trackingCategories, setTrackingCategories] = useState();
  const [bank, setBank] = useState();

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="w-full">
          <div className="bg-[#1C1C1D] w-full">
            <div className="">
              {/* TITLE */}
              <div className="px-5 py-3 bg-accountableDarkBlack">
                <p>Income</p>
              </div>

              {/* BODY */}
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                  <p>Sales</p>
                  <p>USD 2150</p>
                </div>
                <div className="flex items-center justify-between text-accountableBrightGreen">
                  <p>Total Income</p>
                  <p>USD 24,150</p>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="my-3">
              {/* TITLE */}
              <div className="px-5 py-3 bg-accountableDarkBlack">
                <p>Cost of Goods Sold</p>
              </div>

              {/* BODY */}
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                  <p>Consultants</p>
                  <p>USD 2150</p>
                </div>
                <div className="flex items-center justify-between text-accountableBrightGreen">
                  <p>Cost of Goods Sold</p>
                  <p>USD 24,150</p>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="my-3">
              {/* TITLE */}
              <div className="px-5 py-3 bg-accountableDarkBlack">
                <p>Gross Profit</p>
              </div>

              {/* BODY */}
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between text-accountableBrightGreen">
                  <p>Gross Profit</p>
                  <p>USD 24,150</p>
                </div>
              </div>
            </div>

            {/* CATEGORY */}
            <div className="my-3">
              {/* TITLE */}
              <div className="px-5 py-3 bg-accountableDarkBlack">
                <p>Expenses</p>
              </div>

              {/* BODY */}
              <div className="px-5 py-3 flex flex-col gap-y-2">
                <div className="flex items-center justify-between text-white">
                  <p>Bank Charge</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Consultants</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
                <div className="flex items-center justify-between text-red-500">
                  <p>Business Development</p>
                  <p>USD 24,150</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
