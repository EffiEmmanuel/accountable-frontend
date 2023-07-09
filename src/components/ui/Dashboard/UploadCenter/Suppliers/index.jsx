import { useContext, useState } from "react";
import { UserContext } from "../../";

// Images
import delivery from "../../../../../assets/images/delivery.png";

export default function Suppliers() {
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
        className={`absolute top-0 left-0 right-0 z-[2] h-[140vh] backdrop-filter backdrop-blur-lg ${
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

            <p>Suppliers</p>

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
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 border-dashed rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>John Doe</p>
                  <p className="text-gray-500 bg-accountableBlack p-1 text-xs rounded-lg flex justify-center items-center">
                    Cola Foods
                  </p>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 border-dashed rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>John Doe</p>
                  <p className="text-gray-500 bg-accountableBlack p-1 text-xs rounded-lg flex justify-center items-center">
                    Cola Foods
                  </p>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 border-dashed rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>John Doe</p>
                  <p className="text-gray-500 bg-accountableBlack p-1 text-xs rounded-lg flex justify-center items-center">
                    Cola Foods
                  </p>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 border-dashed rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>John Doe</p>
                  <p className="text-gray-500 bg-accountableBlack p-1 text-xs rounded-lg flex justify-center items-center">
                    Cola Foods
                  </p>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-b-gray-500 border-dashed rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>John Doe</p>
                  <p className="text-gray-500 bg-accountableBlack p-1 text-xs rounded-lg flex justify-center items-center">
                    Cola Foods
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:w-[45%] h-full">
              <img
                src={delivery}
                alt=""
                className="w-full my-auto"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>

        {isUploading && (
          <div className="bg-[#323232] rounded-xl w-full lg:w-[45%] absolute top-0 left-0 z-[5] p-5">
            <div className="flex justify-center">
              <h3 className="text-sm text-center flex items-center justify-center h-10 w-44 p-3 bg-accountableDarkBlack">
                NEW SUPPLIER
              </h3>
            </div>

            <form>
              <div className="">
                <input
                  type="text"
                  name="supplierName"
                  placeholder="Supplier Name"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="companyName"
                  placeholder="companyName"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="fax"
                  placeholder="Fax"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  name="addressLineOne"
                  placeholder="Address Line 1"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="addressLineTwo"
                  placeholder="Address Line 2"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="addressLineThree"
                  placeholder="Address Line 3"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip"
                  className="w-full bg-transparent border-b-gray-500 border-b-[0.5px] outline-none focus:outline-none my-5"
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
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
