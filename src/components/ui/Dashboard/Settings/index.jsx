import { useContext, useState } from "react";
import { UserContext } from "../";
import Switch from "react-switch";

export default function Settings() {
  const { user, projects } = useContext(UserContext);

  //   Setting states
  const [notification, setNotification] = useState(false);
  const [fingerprint, setFingerPrint] = useState(false);
  const [screenLock, setScreenLock] = useState(false);
  const [sync, setSync] = useState(false);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-10 relative">
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full">
          <div className="flex items-center gap-x-10 w-full">
            <button
              className="bg-[#323232] text-white rounded-lg w-28 h-10 p-2 text-sm text-gray-500"
              onClick={() => {}}
            >
              Back
            </button>

            <p>Settings</p>
          </div>

          <div className="border-[2px] border-[#323232] p-10 w-full border-dashed min-h-[80vh] border-spacing-[10rem] text-center flex flex-col">
            <div className="flex items-center justify-between w-full">
              <p>Notification</p>
              <div>
                <Switch
                  onChange={(value) => setNotification(value)}
                  checked={notification}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
