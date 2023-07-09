import { useContext, useState } from "react";
import { UserContext } from "../../";

// Icons
import uploadIcon from "../../../../../assets/icons/upload.svg";
import emailIcon from "../../../../../assets/icons/email.svg";
import galleryIcon from "../../../../../assets/icons/gallery.svg";
import pdfIcon from "../../../../../assets/icons/pdf.svg";

// Images
import shopping from "../../../../../assets/images/shopping.png";
import { Link } from "react-router-dom";

export default function Expenses() {
  const { user, projects } = useContext(UserContext);
  const [uploadType, setUploadType] = useState();

  const [isUploading, setIsUploading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [item, setItem] = useState();

  return (
    <>
      {/* LATEST ACTIVITY */}
      {/* OVERLAY */}
      <div
        className={`absolute top-0 left-0 right-0 z-[2] h-[134vh] backdrop-filter backdrop-blur-lg ${
          isUploading ? "block" : "hidden"
        }`}
        onClick={() => setIsUploading(false)}
      ></div>

      <section className="mt-10 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
          <div className="flex items-center justify-between w-full">
            <button
              className="bg-[#323232] text-white rounded-lg w-28 h-10 p-2 text-sm"
              onClick={() => {}}
            >
              CANCEL
            </button>

            <p>Expenses</p>

            <button
              className="bg-[#199EA4] text-white rounded-lg w-28 h-10 p-2 text-sm"
              onClick={() => {
                setIsUploading(true);
              }}
            >
              NEW
            </button>
          </div>

          <div className="w-full min-h-[80vh] flex justify-between">
            <div className="bg-[#323232] rounded-xl w-full lg:w-[45%]">
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Type of Expense 1</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ... text-xs">
                      INV # NUMBER
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$370</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Type of Expense 2</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ... text-xs">
                      INV # NUMBER
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$370</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Type of Expense 3</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ... text-xs">
                      INV # NUMBER
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$370</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Type of Expense 4</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ... text-xs">
                      INV # NUMBER
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$370</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Type of Expense 5</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ... text-xs">
                      INV # NUMBER
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$370</p>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:w-[45%]">
              <img
                src={shopping}
                alt=""
                className="w-full"
                onClick={() => {}}
              />
            </div>
          </div>

          <button
            className="bg-transparent text-accountableBrightGreen rounded-lg w-auto p-2 text-lg"
            onClick={() => {}}
          >
            CREATE A NEW PURCHASE ORDER
          </button>

          <div className="flex justify-center w-full">
            <Link
              to="/dashboard/upload-center/expenses/upload-expense"
              className="bg-[#199EA4] text-white rounded-lg w-auto h-10 p-2 text-sm"
            >
              Upload New Expenses
            </Link>
          </div>
        </div>

        {isUploading && (
          <div className="bg-[#323232] rounded-xl w-full lg:w-[45%] absolute top-0 left-0 z-[5] p-5">
            <div className="flex justify-center">
              <h3 className="text-xl text-center flex items-center justify-center h-10 w-44 p-3 bg-accountableDarkBlack">
                NEW EXPENSE
              </h3>
            </div>

            <form>
              <div className="">
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="typeOfExpense"
                  placeholder="Type of Expense"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="taxType"
                  placeholder="Tax Type"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <p className="text-gray-500 border-b-gray-500 border-b-[0.5px] my-5">
                  Notes: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Cras a volutpat arcu. Mauris sagittis urna a
                  pellentesque dictum. Donec maximus ultricies suscipit.
                </p>

                <input
                  type="text"
                  name="referenceNumber"
                  placeholder="Reference #"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />

                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
