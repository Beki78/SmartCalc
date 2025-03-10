import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 ">
      <div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://bereketgetachew.netlify.app/">BereketG</a> .
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
