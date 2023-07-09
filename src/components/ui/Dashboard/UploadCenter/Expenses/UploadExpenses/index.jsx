import { useContext, useState } from "react";
import { UserContext } from "../../../";

// Icons
import uploadIcon from "../../../../../../assets/icons/upload.svg";
import excel from "../../../../../../assets/images/excel.png";
import imageUpload from "../../../../../../assets/images/imageUpload.png";

export default function UploadCenter() {
  const { user, projects } = useContext(UserContext);
  const [uploadType, setUploadType] = useState();

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

            <p>Upload New Expense</p>

            <button
              className="bg-[#199EA4] text-white rounded-lg w-28 h-10 p-2 text-sm"
              onClick={() => {}}
            >
              NEW
            </button>
          </div>

          <div className="border-[2px] border-[#323232] w-full border-dashed min-h-[80vh] border-spacing-[10rem] text-center flex flex-col items-center justify-center">
            <img
              src={uploadIcon}
              alt=""
              className="w-[200px] cursor-pointer"
              onClick={() => {}}
            />

            <div className="mt-7 ">
              <h2 className="font-bold text-2xl">Upload</h2>
              <p className="text-gray-500 mt-2">Photo, Excel</p>
            </div>

            <div className="flex items-center gap-x-4 mt-7">
              <img src={excel} alt="" className="" />
              <img src={imageUpload} alt="" className="" />
            </div>

            <div className="flex flex-col gap-y-4 mt-7 text-gray-500">
              <p>Drag and Drop your file here or click to select one</p>
              <p className="lg:max-w-xl">
                Fusce volutpat lectus et nisl consectetur finibus. In vitae
                scelerisque augue, in varius eros. Nunc sapien diam, euismod et
                pretium id, volutpat et tortor. In vulputate lorem quis dui
                vestibulum, vitae imperdiet diam bibendum.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
