import React from "react";
const styles = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "16px",
};

const FeaturedProductHeader = ({ title, showTabs, collections }) => {
  return (
    <div className="row" style={{}}>
      <div className="col-12">
        <div className="heading_tab_header">
          <div className="heading_s2" style={{ ...styles, opacity: 1 }}>
            <h2>{title}</h2>
          </div>
          {showTabs && (
            <div className="tab-style2">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#tabmenubar"
                aria-expanded="false"
              >
                <span className="ion-android-menu" />
              </button>
              <ul
                className="nav nav-tabs justify-content-center justify-content-md-end"
                id="tabmenubar"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="active"
                    style={{ ...styles, opacity: 1 }}
                    id={`${collections[3].code}-tab`}
                    data-bs-toggle="tab"
                    href={`#${collections[3].code}`}
                    role="tab"
                    aria-controls={collections[3].code}
                    aria-selected="true"
                  >
                    {collections[3].name}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className=""
                    style={{ ...styles, opacity: 1 }}
                    id={`${collections[1].code}-tab`}
                    data-bs-toggle="tab"
                    href={`#${collections[1].code}`}
                    role="tab"
                    aria-controls={collections[1].code}
                    aria-selected="true"
                  >
                    {collections[1].name}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    style={{ ...styles, opacity: 1 }}
                    id={`${collections[2].code}-tab`}
                    data-bs-toggle="tab"
                    href={`#${collections[2].code}`}
                    role="tab"
                    aria-controls={collections[2].code}
                    aria-selected="true"
                  >
                    {collections[2].name}
                  </a>
                </li> */}
                {/* <li className="nav-item">
                  <a
                    className=" "
                    style={{ ...styles, opacity: 1 }}
                    id="sellers-tab"
                    data-bs-toggle="tab"
                    href="#sellers"
                    role="tab"
                    aria-controls="sellers"
                    aria-selected="false"
                  >
                    Bán Chạy
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" "
                    style={{ ...styles, opacity: 1 }}
                    id="featured-tab"
                    data-bs-toggle="tab"
                    href="#featured"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="false"
                  >
                    Đặc Biệt
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=" "
                    style={{ ...styles, opacity: 1 }}
                    id="special-tab"
                    data-bs-toggle="tab"
                    href="#special"
                    role="tab"
                    aria-controls="special"
                    aria-selected="false"
                  >
                    Chỉ Có Tại Homie
                  </a>
                </li> */}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductHeader;
