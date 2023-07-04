import React from "react";

import { SiZalo } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import {BsMessenger } from "react-icons/bs";
import classes from "./ButtonCustomer.module.css";
import Link from "next/link";

const ButtonCustomer = () => {
  return (
    <div
      className={`${classes.button_container} d-none d-md-flex flex-column align-items-center gap-1 `}
    >
      <Link
        className={`${classes.facebook} rounded-rectangle`}
        href="https://m.me/tiemhomie.sg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsMessenger />
      </Link>

      {/* <Link
        className={`${classes.zalo} rounded-rectangle`}
        href="https://zalo.me/0386660782"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={classes.zaloRec}>
          <div className={classes.zaloCir}>
            <SiZalo className="m-2" />
          </div>
        </div>
      </Link> */}

      <Link
        className={`${classes.insta} rounded-rectangle`}
        href="https://www.instagram.com/tiemhomie/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineInstagram />
      </Link>
    </div>
  );
};

export default ButtonCustomer;