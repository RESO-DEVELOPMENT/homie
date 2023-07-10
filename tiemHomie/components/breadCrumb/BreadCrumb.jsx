import Link from "next/link";
import React from "react";
import classes from "../breadCrumb/BreadCrumb.module.css";
const BreadCrumb = ({ descriptionTitle, title, middlePath }) => {
  return (
    <>
      {/* START SECTION BREADCRUMB */}
      <div className={classes.bg}>
        <div className="breadcrumb_section bg_gray page-title-mini pd10">
          <div className="container">
            {/* STRART CONTAINER */}
            <div className="row align-items-center">
              <div className="col-md-12">
                <ol className="breadcrumb justify-content-md">
                  <li className={`breadcrumb-item`}>
                    <Link href="/" className={classes.linkUnderline}>
                      Trang chủ
                    </Link>
                  </li>
                  {middlePath !== "Bộ sưu tập" && (
                    <>
                      <li className={`breadcrumb-item`}>
                        <Link
                          href="/collection"
                          className={classes.linkUnderline}
                        >
                          {middlePath}
                        </Link>
                      </li>
                      <li className={`breadcrumb-item active`}>{title}</li>
                    </>
                  )}
                  {middlePath === "Danh mục" && (
                    <>
                      <li className={`breadcrumb-item`}>
                        <Link
                          href="/category"
                          className={classes.linkUnderline}
                        >
                          {middlePath}
                        </Link>
                      </li>
                      <li className={`breadcrumb-item active`}>{title}</li>
                    </>
                  )}
                </ol>
              </div>
            </div>
          </div>
          {/* END CONTAINER*/}
        </div>
      </div>
      {/* END SECTION BREADCRUMB */}
    </>
  );
};

export default BreadCrumb;
