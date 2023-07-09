import { useContext, useState } from "react";
import { UserContext } from "../../";

// Images
import sketching from "../../../../../assets/images/sketching.png";

export default function Receipts() {
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
        className={`absolute top-0 left-0 right-0 z-[2] h-[110vh] backdrop-filter backdrop-blur-lg ${
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

            <p>Sales Receipt</p>

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
                  <p>Cala Foods</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ...">
                      Product Name
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Luskin's</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ...">
                      Product Name
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Grey Fade</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ...">
                      Product Name
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rink's</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ...">
                      Product Name
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rhodes Furniture</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="bg-accountableDarkBlack p-1 rounded-lg line-clamp-1 ...">
                      Product Name
                    </p>
                  </div>
                </div>

                <p className="font-semibold text-xl">$1,280</p>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:w-[45%] mt-32">
              <img
                src={sketching}
                alt=""
                className="w-full"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        {isUploading && (
          <div className="bg-[#323232] rounded-xl w-full lg:w-[45%] absolute top-0 left-0 z-[5] p-5">
            <div className="flex justify-center">
              <h3 className="text-xl text-center flex items-center justify-center h-10 w-44 p-3 bg-accountableDarkBlack">
                NEW RECEIPT
              </h3>
            </div>

            <form>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-accountableBrightGreen">Customer</p>
                  <button className="text-accountableBrightGreen">+</button>
                </div>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="paymentMethod"
                  placeholder="Payment Method"
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
        )}
      </section>
    </>
  );
}
