import { FaBug, FaHeadset, FaHome, FaPlus, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdChat, MdDashboard, MdPlayLesson } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { BiBarChartSquare } from "react-icons/bi";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiSend } from "react-icons/fi";
import { TbLogout, TbNotes, TbProgress } from "react-icons/tb";
import accountableLogo from "../../../../assets/logos/accountable-logo.png";
import { useState } from "react";

export default function DashboardNav({ isNavHidden, user, page }) {
  const router = useNavigate();

  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const [isUploadCenterOpen, setIsUploadCenterOpen] = useState(false);

  return (
    <nav
      className={`bg-accountableDarkBlack md:w-1/4 lg:w-1/5 z-10 fixed w-2/4 min-h-screen lg:block text-accountableBrightGreen pl-2 pt-7 top-0 left-0 ${
        isNavHidden ? "hidden" : "block"
      }`}
    >
      <img
        src={accountableLogo}
        alt="Accountable"
        className="w-[150px] mx-auto"
      />
      <ul className="-mt-0">
        {/* CATEGORY */}
        <li className="my-11">
          {/* ITEMS */}
          <ul className="mt-3">
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "dashboard" && "text-gray-400"
              }`}
            >
              <Link to="/dashboard" className="flex items-center gap-2">
                <MdDashboard size={16} className="" />
                <span className=" text-sm">Dashboard</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "transactions" && "text-gray-400"
              }`}
            >
              <Link
                to="/dashboard/transactions"
                className="flex items-center gap-2"
              >
                <BiBarChartSquare size={16} className="" />
                <span className="text-sm">Transactions</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg relative ${
                (page == "upload-customer" ||
                  page == "upload-contact" ||
                  page == "upload-invoice" ||
                  page == "upload-supplier" ||
                  page == "upload-expense" ||
                  page == "upload-quotation") &&
                "text-gray-400"
              }`}
            >
              <p
                to="/dashboard/upload-center"
                className="flex items-center cursor-pointer gap-2"
                onClick={() => {
                  setIsSalesOpen(false);
                  setIsUploadCenterOpen(!isUploadCenterOpen);
                }}
              >
                <FiSend size={16} className="" />
                <span className="text-sm">Upload Center</span>
              </p>

              <div
                className={`absolute top-0 bg-[#323232] z-10 h-auto w-auto right-5 p-4 rounded-xl flex-col justify-between ${
                  isUploadCenterOpen ? "flex" : "hidden"
                }`}
              >
                <Link
                  to="/dashboard/upload-center/invoices"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-invoice" && "text-accountableBrightGreen"
                    }`}
                  >
                    INVOICES
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/customers"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-customer" && "text-accountableBrightGreen"
                    }`}
                  >
                    CUSTOMERS
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/contacts"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-contact" && "text-accountableBrightGreen"
                    }`}
                  >
                    CONTACTS
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/suppliers"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-supplier" && "text-accountableBrightGreen"
                    }`}
                  >
                    SUPPLIERS
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/quotations"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-quotation" &&
                      "text-accountableBrightGreen"
                    }`}
                  >
                    QUOTATION
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/expenses"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-expense" && "text-accountableBrightGreen"
                    }`}
                  >
                    EXPENSES
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/products"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-product" && "text-accountableBrightGreen"
                    }`}
                  >
                    PRODUCTS
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/receipts"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "upload-receipt" && "text-accountableBrightGreen"
                    }`}
                  >
                    RECEIPTS
                  </span>
                </Link>
              </div>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg relative ${
                (page == "profit-and-loss" || page == "balance-sheet") &&
                "text-gray-400"
              }`}
            >
              <p
                className="flex items-center cursor-pointer gap-2"
                onClick={() => {
                  setIsUploadCenterOpen(false);
                  setIsSalesOpen(!isSalesOpen);
                }}
              >
                <BiBarChartSquare size={16} className="" />
                <span className=" text-sm">Sales</span>
              </p>

              <div
                className={`absolute top-0 bg-[#323232] h-auto w-auto right-5 p-4 rounded-xl flex-col justify-between ${
                  isSalesOpen ? "flex" : "hidden"
                }`}
              >
                <Link
                  to="/dashboard/upload-center/profit-and-loss"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500`}
                >
                  <span
                    className={`text-xs ${
                      page == "profit-and-loss" && "text-accountableBrightGreen"
                    }`}
                  >
                    PROFIT AND LOSS
                  </span>
                </Link>

                <Link
                  to="/dashboard/upload-center/balance-sheet"
                  className={`flex items-center gap-2 hover:text-accountableBrightGreen text-gray-500 mt-5`}
                >
                  <span
                    className={`text-xs ${
                      page == "balance-sheet" && "text-accountableBrightGreen"
                    }`}
                  >
                    BALANCE SHEET
                  </span>
                </Link>
              </div>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "purchases" && "text-gray-400"
              }`}
            >
              <Link
                to="/dashboard/purchases"
                className="flex items-center gap-2"
              >
                <TbNotes size={16} className="" />
                <span className=" text-sm">Purchases</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "reports" && "text-gray-400"
              }`}
            >
              <Link to="/dashboard/reports" className="flex items-center gap-2">
                <BiBarChartSquare size={16} className="" />
                <span className=" text-sm">Reports</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "customers" && "text-gray-400"
              }`}
            >
              <Link
                to="/dashboard/upload-center/customers"
                className="flex items-center gap-2"
              >
                <BiBarChartSquare size={16} className="" />
                <span className=" text-sm">Customers</span>
              </Link>
            </li>
            <li
              className={`my-8 ml-7 py-2 pl-3 rounded-l-lg ${
                page == "settings" && "text-gray-400"
              }`}
            >
              <Link
                to="/dashboard/settings"
                className="flex items-center gap-2"
              >
                <GiSettingsKnobs size={16} className="rotate-90" />
                <span className=" text-sm">Settings</span>
              </Link>
            </li>
            <li className={`my-8 ml-7 py-2 pl-3 rounded-l-lg text-red-500`}>
              <Link to="/" className="flex items-center gap-2">
                <TbLogout size={16} className="" />
                <span className=" text-sm">Logout</span>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}