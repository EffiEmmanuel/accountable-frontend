import { useContext } from "react";
import { FaRegBell } from "react-icons/fa";
import { UserContext } from "../../Dashboard";
import { Link } from "react-router-dom";
import { PiWalletFill } from "react-icons/pi";
import { RiNotification2Fill } from "react-icons/ri";
import { useState } from "react";
import { MdMailOutline } from "react-icons/md";

// Images
import profileImage from "../../../../assets/images/profile-img.png";

export default function DahboardTopBar(props) {
  const { user } = useContext(UserContext);

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isCurrenciesOpen, setIsCurrenciesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <div className="pb-3 flex justify-between bg-accountableDarkGreen pl-10 lg:pl-[22%] py-4 pr-10">
      <div className="relative flex items-center gap-x-3">
        <div
          onClick={() => {
            setIsWalletOpen(!isWalletOpen);
            setIsProfileOpen(false);
            setIsCurrenciesOpen(false);
            setIsNotificationOpen(false);
          }}
          className="bg-accountableDarkerGreen text-gray-400 w-10 h-10 flex justify-center items-center rounded-lg"
        >
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

        {isWalletOpen && (
          <div className="p-4 w-[100px] absolute top-16 z-40 lg:left-0 h-auto bg-white rounded-lg shadow-lg">
            {/* Currencies */}
            <div className="flex items-center w-full">
              <div className="flex flex-col gap-y-2">
                <Link
                  to="/"
                  onClick={() => {
                    /* Set Currency */
                  }}
                  className="text-[#323232] text-xs w-full text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                >
                  All balances
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    /* Set Currency */
                  }}
                  className="text-[#323232] w-full text-xs mt-2 text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                >
                  My Accounts
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-x-5">
        <div
          onClick={() => {
            setIsCurrenciesOpen(!isCurrenciesOpen);
            setIsWalletOpen(false);
            setIsProfileOpen(false);
            setIsNotificationOpen(false);
          }}
          className="relative cursor-pointer bg-accountableDarkerGreen text-gray-400 w-14 h-6 flex justify-center items-center rounded-full"
        >
          <p className="text-xs">USD</p>
          {isCurrenciesOpen && (
            <div className="w-[60px] absolute top-16 z-40 -right-10 lg:right-0 h-auto bg-white rounded-lg shadow-lg p-4">
              {/* Currencies */}
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                  <small
                    onClick={() => {
                      /* Set Currency */
                    }}
                    className="text-[#323232] w-full text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                  >
                    GBP
                  </small>
                  <small
                    onClick={() => {
                      /* Set Currency */
                    }}
                    className="text-[#323232] w-full text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                  >
                    EUR
                  </small>
                  <small
                    onClick={() => {
                      /* Set Currency */
                    }}
                    className="text-[#323232] w-full text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                  >
                    CAD
                  </small>
                  <small
                    onClick={() => {
                      /* Set Currency */
                    }}
                    className="text-[#323232] w-full text-center pb-2 cursor-pointer border-b-[0.5px] border-b-[#323232]"
                  >
                    INR
                  </small>
                  {/* OR YOU CAN LOOP THROUGH A LIST OF CURRENCIES */}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative bg-accountableDarkerGreen w-10 p-2 rounded-lg h-10 flex justify-center items-center">
          <div>
            <div className="bg-accountableBrightGreen h-3 w-3 relative top-1 right-4 flex justify-center items-center">
              <span className="text-xs">3</span>
            </div>
            <RiNotification2Fill
              size={20}
              className="cursor-pointer text-accountableBrightGreen relative -top-2"
              onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setIsWalletOpen(false);
                setIsProfileOpen(false);
                setIsCurrenciesOpen(false);
              }}
            />
          </div>

          {isNotificationOpen && (
            <div className="lg:w-[500px] w-[300px] absolute top-16 z-40 -right-10 lg:right-0 h-auto bg-white rounded-lg shadow-lg p-4">
              {/* Notification */}
              <div className="pb-5 border-b-[0.5px] border-b-[#323232] flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="font-bold">Notification title</p>

                  <small className="text-[#323232]">
                    Notification text goes here
                  </small>
                </div>

                <MdMailOutline
                  size={18}
                  className="text-[#323232]"
                  onClick={() => {
                    // Mark as read / unread
                  }}
                />
              </div>
              {/* Notification */}
              <div className="pb-5 my-4 border-b-[0.5px] border-b-[#323232] flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="font-bold">Notification title</p>

                  <small className="text-[#323232]">
                    Notification text goes here
                  </small>
                </div>

                <MdMailOutline
                  size={18}
                  className="text-[#323232]"
                  onClick={() => {
                    // Mark as read / unread
                  }}
                />
              </div>
              {/* Notification */}
              <div className="pb-5 my-4 border-b-[0.5px] border-b-[#323232] flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="font-bold">Notification title</p>

                  <small className="text-[#323232]">
                    Notification text goes here
                  </small>
                </div>

                <MdMailOutline
                  size={18}
                  className="text-[#323232]"
                  onClick={() => {
                    // Mark as read / unread
                  }}
                />
              </div>
              {/* Notification */}
              <div className="pb-5 my-4 border-b-[0.5px] border-b-[#323232] flex items-center justify-between">
                <div className="flex flex-col gap-y-1">
                  <p className="font-bold">Notification title</p>

                  <small className="text-[#323232]">
                    Notification text goes here
                  </small>
                </div>

                <MdMailOutline
                  size={18}
                  className="text-[#323232]"
                  onClick={() => {
                    // Mark as read / unread
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <img
            src={profileImage}
            alt="User Profile Image"
            className="w-[35px] cursor-pointer"
            onClick={() => {
              setIsProfileOpen(!isProfileOpen);
              setIsCurrenciesOpen(false);
              setIsWalletOpen(false);
              setIsNotificationOpen(false);
            }}
          />

          {isProfileOpen && (
            <div className="w-[300px] absolute top-16 right-2 z-40 lg:right-0 h-auto bg-white rounded-lg shadow-lg p-4">
              {/* Profile setting */}
              <Link
                to="/"
                className="pb-3 border-b-[0.3px] border-b-[#323232] flex items-center justify-between"
              >
                <div className="flex flex-col gap-y-1">
                  <small className="text-[#323232]">My Profile</small>
                </div>
              </Link>
              <Link
                to="/dashboard/settings"
                className="pb-3 border-b-[0.3px] border-b-[#323232] flex items-center justify-between my-2"
              >
                <div className="flex flex-col gap-y-1">
                  <small className="text-[#323232]">Settings</small>
                </div>
              </Link>
              <Link
                to="/"
                className="pb-3 border-b-[0.3px] border-b-[#323232] flex items-center justify-between my-2"
              >
                <div className="flex flex-col gap-y-1">
                  <small className="text-red-500">Log Out</small>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
