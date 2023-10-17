import React, { useState } from "react";

const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuItems = [
    { path: "home", list: [] },
    { path: "login", list: [] },
    { path: "register", list: [] },
    {
      path: "profile",
      list: [
        { path: "my profile" },
        { path: "edit profile" },
        { path: "transactions" },
        { path: "logout" },
      ],
    },
  ];

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.path === "profile" ? (
                <div className="relative group">
                  <button
                    onClick={toggleProfileDropdown}
                    className="hover:text-gray-300 focus:outline-none"
                  >
                    Profile
                  </button>
                  {isProfileDropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-gray-800 text-white border border-gray-700 rounded-sm py-2 space-y-1">
                      {item.list.map((subItem, subIndex) => (
                        <navlink
                          key={subIndex}
                          href={`/${subItem.path}`}
                          className="block px-4 py-2 hover:text-gray-300"
                        >
                          {subItem.path}
                        </navlink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <navlink href={`/${item.path}`} className="hover:text-gray-300">
                  {item.path}
                </navlink>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
