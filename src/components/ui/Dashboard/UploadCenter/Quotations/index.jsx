import { useContext, useState } from "react";
import { UserContext } from "../../";

// Icons
import uploadIcon from "../../../../../assets/icons/upload.svg";
import emailIcon from "../../../../../assets/icons/email.svg";
import galleryIcon from "../../../../../assets/icons/gallery.svg";
import pdfIcon from "../../../../../assets/icons/pdf.svg";

// Images
import teamup from "../../../../../assets/images/teamup.png";

export default function Quotations() {
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

            <p>Quotations</p>

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
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-dashed border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-accountableBlack p-1 rounded-lg line-clamp-1 ...">
                      INV # NUMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-dashed border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-accountableBlack p-1 rounded-lg line-clamp-1 ...">
                      INV # NUMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-dashed border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-accountableBlack p-1 rounded-lg line-clamp-1 ...">
                      INV # NUMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-dashed border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-accountableBlack p-1 rounded-lg line-clamp-1 ...">
                      INV # NUMBER
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#2E2E2E] border-b-[0.5px] border-dashed border-b-gray-500 rounded-tl-xl rounded-tr-xl p-3 flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <p>Rodger Struck</p>
                  <div className="flex items-center gap-x-2">
                    <p className="text-gray-500">Today</p>
                    <p className="text-[#0B595C]">Due On: 04 May 2023</p>
                    <p className="bg-accountableBlack p-1 rounded-lg line-clamp-1 ...">
                      INV # NUMBER
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:inline-block lg:w-[45%]">
              <img src={teamup} alt="" className="w-full" onClick={() => {}} />
            </div>
          </div>
        </div>

        {isUploading && (
          <div className="rounded-xl w-full absolute top-0 left-0 z-[5] p-5">
            {/* <img src={} alt="Quotation for ..." className="" /> */}

            <div className="flex items-center gap-x-7">
              <button
                className="bg-transparent text-accountableBrightGreen rounded-lg w-28 h-10 p-2 text-sm"
                onClick={() => {}}
              >
                EDIT
              </button>
              <button
                className="bg-transparent text-accountableBrightGreen rounded-lg w-28 h-10 p-2 text-sm"
                onClick={() => {}}
              >
                CREATE NEW
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
