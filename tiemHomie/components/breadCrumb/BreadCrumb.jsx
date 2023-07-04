import Link from 'next/link'
import React from 'react'
import classes from '../breadCrumb/BreadCrumb.module.css'
const BreadCrumb = ({ descriptionTitle, title, middlePath }) => {
  return (
    <>

      {/* START SECTION BREADCRUMB */}
      <div className={classes.bg}>
        <div className="breadcrumb_section bg_gray page-title-mini">
          <div className="container">
            {/* STRART CONTAINER */}
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className={classes.head}>
                  <div className="page-title">
                    <h1>{descriptionTitle}</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ol className="breadcrumb justify-content-md-end">
                  <li className={`breadcrumb-item`}>
                    <Link href="/" className={classes.linkUnderline}>Trang chủ</Link>
                  </li>
                  {middlePath !== "Danh mục" && (
                    <>
                      <li className={`breadcrumb-item`}>
                        <Link href="/" className={classes.linkUnderline}>{middlePath}</Link>
                      </li>
                      <li className={`breadcrumb-item active`}>{title}</li>
                    </>
                  )}
                  {middlePath === "Danh mục" && (
                    <>
                      <li className={`breadcrumb-item`}>
                        <Link href="/collection" className={classes.linkUnderline}>Danh mục</Link>
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
  )
}

export default BreadCrumb