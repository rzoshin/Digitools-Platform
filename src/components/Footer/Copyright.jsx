import React from "react";

const Copyright = () => {
  return (
    <div className="bg-[#101727]  text-[#FAFAFA]/50">
      <div className="max-w-[80%] mx-auto flex justify-between border-t border-[#FAFAFA]/20 py-7.5">
        <span>© 2026 Digitools. All rights reserved.</span>
        <span>
          <ul className="flex justify-between gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Copyright;
