import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../Dashboard";
import { Link } from "react-router-dom";
import { PiWalletFill } from "react-icons/pi";
import { RiNotification2Fill } from "react-icons/ri";

// Images
import profileImage from "../../../../assets/images/profile-img.png";

export default function DahboardTopBar(props) {
  const { user } = useContext(UserContext);
  return (
    <div className="pb-3 flex justify-between bg-accountableDarkGreen pl-10 lg:pl-[22%] py-4 pr-10">
      <div className="flex items-center gap-x-3">
        <div className="bg-accountableDarkerGreen text-gray-400 w-10 h-10 flex justify-center items-center rounded-lg">
          <Link to="#">
            <PiWalletFill
              size={20}
              className="cursor-pointer text-accountableBrightGreen relative"
            />
          </Link>
        </div>
        <div className="bg-accountableDarkerGreen text-accountableBrightGreen w-14 h-6 flex p-2 justify-center items-center rounded-full">
          <p className="text-xs">$26,200</p>
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <div className="bg-accountableDarkerGreen text-gray-400 w-14 h-6 flex justify-center items-center rounded-full">
          <p className="text-xs">USD</p>
        </div>
        <div className="bg-accountableDarkerGreen w-10 p-2 rounded-lg h-10 flex justify-center items-center">
          <div>
            <div className="bg-accountableBrightGreen h-3 w-3 relative top-1 right-4 flex justify-center items-center">
              <span className="text-xs">3</span>
            </div>
            <RiNotification2Fill
              size={20}
              className="cursor-pointer text-accountableBrightGreen relative -top-2"
            />
          </div>
        </div>

        <div className="">
          <img
            src={profileImage}
            alt="User Profile Image"
            className="w-[35px]"
          />
        </div>
      </div>
    </div>
  );
}
