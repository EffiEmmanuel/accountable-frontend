import { useContext, useState } from "react";
import { UserContext } from "../../";

// Icons
import uploadIcon from "../../../../../assets/icons/upload.svg";
import emailIcon from "../../../../../assets/icons/email.svg";
import galleryIcon from "../../../../../assets/icons/gallery.svg";
import pdfIcon from "../../../../../assets/icons/pdf.svg";

// Images
import teamup from "../../../../../assets/images/teamup.png";

export default function Invoices() {
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
        className={`absolute top-0 left-0 right-0 z-[2] h-[100vh] backdrop-filter backdrop-blur-lg ${
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

            <p>Invoices</p>

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
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                      Pacific Stereo
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                      Pacific Stereo
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                      Pacific Stereo
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                      Pacific Stereo
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-[#323232] p-1 rounded-lg line-clamp-1 ...">
                      Pacific Stereo
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:w-[45%]">
              <img src={teamup} alt="" className="w-full" onClick={() => {}} />
            </div>
          </div>
        </div>
        {/* 
        {isUploading && (
          <div className="bg-[#323232] rounded-xl w-full lg:w-[45%] absolute top-0 left-0 z-[5] p-5">
            <div className="flex justify-center">
              <h3 className="text-xl text-center flex items-center justify-center h-10 w-44 p-3 bg-accountableDarkBlack">
                NEW INVOICE
              </h3>
            </div>

            <form>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-accountableBrightGreen">Customer</p>
                  <button className="text-accountableBrightGreen">+</button>
                </div>
                <input
                  type="text"
                  name="invoiceNumber"
                  placeholder="Invoice #"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="terms"
                  placeholder="Terms"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="date"
                  name="dueDate"
                  placeholder="Due Date"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-accountableBrightGreen">
                    Add Product or Service
                  </p>
                  <button className="text-accountableBrightGreen">+</button>
                </div>
                <input
                  type="number"
                  name="unitPrice"
                  placeholder="Unit Price / Rate #"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="discount"
                  placeholder="Discount"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="shippingFees"
                  placeholder="Shipping Fees"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="messageToCustomer"
                  placeholder="Message To Customer"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="statementToCustomer"
                  placeholder="Statement To Customer"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
              </div>
            </form>
          </div>
        )} */}

        {isUploading && (
          <div className="bg-[#323232] rounded-xl w-full lg:w-[45%] absolute top-0 left-0 z-[5] p-5">
            <div className="flex items-center justify-between">
              <p className="text-white">Customer</p>
              <p className="text-accountableBrightGreen bg-accountableDarkGreen p-1 text-xs rounded-lg flex justify-center items-center">
                draft
              </p>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex flex-col mt-2">
                <p className="text-accountableBrightGreen font-bold text-xl">
                  #012345678
                </p>
                <span className="text-gray-500 text-sm">04 July 2023</span>
              </div>
              <button className="text-accountableBrightGreen">
                + Add receiver
              </button>
            </div>

            <div className="bg-accountableDarkBlack rounded-xl w-full p-5 my-5">
              <div className="flex justify-end">
                <button className="text-accountableBrightGreen bg-accountableDarkGreen p-4 text-sm rounded-lg flex justify-center items-center">
                  Utilities
                </button>
              </div>

              <div className="flex flex-col mt-2">
                <p className="text-white font-bold text-xl">Water Bill</p>
                <span className="text-gray-500 text-sm">April 2023</span>
              </div>

              <div className="flex justify-end mt-2">
                <p className="text-white font-bold">Due: $150</p>
              </div>
            </div>

            <div className="">
              <p className="text-white font-bold">Summary</p>

              <div className="flex items-center justify-between my-7 border-b-gray-500 border-b-[0.5px]">
                <p className="text-gray-500">Due</p>
                <p className="text-white">$150</p>
              </div>

              <div className="flex items-center justify-between my-7 border-b-gray-500 border-b-[0.5px]">
                <p className="text-gray-500">Tax</p>
                <p className="text-white">$8.2</p>
              </div>

              <div className="flex items-center justify-between my-7">
                <p className="text-gray-500">Total</p>
                <p className="text-white">$158.2</p>
              </div>
            </div>

            <p className="w-full lg:max-w-xl">
              Notes: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras a volutpat arcu. Mauris sagittis urna a pellentesque dictum.
              Donec maximus ultricies suscipit.
            </p>

            <button
              onClick={() => {}}
              className="w-full bg-accountableDarkGreen text-white h-14 p-2 rounded-xl my-5"
            >
              Create
            </button>
          </div>
        )}
      </section>
    </>
  );
}
