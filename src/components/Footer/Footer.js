import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-neutral-content pt-12">
      <div className="text-gray-100 text-center py-6">
        <p>All Rights Reserved</p>
        <p>
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2022{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
