"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { updateNotificationSettings } from "@/state/userSlice";
import Header from "../Header";

const NotificationSettings = () => {
  const dispatch = useAppDispatch();
  const notificationSettings = useAppSelector(
    (state) => state.user.notificationSettings,
  );

  const handleToggle = (
    field: keyof typeof notificationSettings,
  ) => {
    dispatch(
      updateNotificationSettings({ [field]: !notificationSettings[field]}),
    );
  };

  return (
    <div className="rounded-lg border border-gray-200 shadow-lg bg-white px-3 pb-3">
      <Header
        name="Notifications Preferences"
        description="Manage how and when you receive notifications"
        color=""
        isSmallText
      />

      <form className="grid gap-2">
        <div className="flex justify-between">
          <label>
            <h3 className="text-[9px]">Email Notification</h3>
            <p className="text-[8px] font-light">Receive update via email</p>
          </label>
          <div className="">
              <input
                type="checkbox"
                checked={notificationSettings.email}
                onChange={() => handleToggle("email")}
                className="scale-65"
              />
          </div>
        </div>

        <div className="flex justify-between">
          <label>
            <h3 className="text-[9px]">Performance Report</h3>
            <p className="text-[8px] font-light">Weekly performance summaries</p>
          </label>
          <input
            type="checkbox"
            checked={notificationSettings.reports}
            onChange={() => handleToggle("reports")}
            className="scale-65"
          />
        </div>

        <div className="flex justify-between">
          <label>
            <h3 className="text-[9px]">New School Alerts</h3>
            <p className="text-[8px] font-light">Recieve update via email</p>
          </label>
          <input
            type="checkbox"
            checked={notificationSettings.alert}
            onChange={() => handleToggle("alert")}
            className="scale-65"
          />
        </div>
      </form>
    </div>
  );
};

export default NotificationSettings;
