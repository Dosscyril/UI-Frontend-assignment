import React from "react";
function AccountSettings() {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-6">
        Account Settings
      </h1>
      <div className="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h3 className="font-semibold">
            Marry Doe
          </h3>
          <p className="text-gray-500 text-sm">
            marry@gmail.com
          </p>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-6 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat.
      </p>
    </div>
  );
}
export default AccountSettings;