import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ButtonCustomer from "../components/Button/ButtonCustomer";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const linkTags = [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/assets/images2/logo_title.png",
      },
      { rel: "stylesheet", href: "/assets/css/animate.css" },
      { rel: "stylesheet", href: "/assets/bootstrap/css/bootstrap.min.css" },
      {
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap",
        rel: "stylesheet",
      },
      {
        href: "https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap",
        rel: "stylesheet",
      },
      { rel: "stylesheet", href: "/assets/css/all.min.css" },
      { rel: "stylesheet", href: "/assets/css/ionicons.min.css" },
      { rel: "stylesheet", href: "/assets/css/themify-icons.css" },
      { rel: "stylesheet", href: "/assets/css/linearicons.css" },
      { rel: "stylesheet", href: "/assets/css/flaticon.css" },
      { rel: "stylesheet", href: "/assets/css/simple-line-icons.css" },
      {
        rel: "stylesheet",
        href: "/assets/owlcarousel/css/owl.carousel.min.css",
      },
      { rel: "stylesheet", href: "/assets/owlcarousel/css/owl.theme.css" },
      {
        rel: "stylesheet",
        href: "/assets/owlcarousel/css/owl.theme.default.min.css",
      },
      { rel: "stylesheet", href: "/assets/css/magnific-popup.css" },
      { rel: "stylesheet", href: "/assets/css/slick.css" },
      { rel: "stylesheet", href: "/assets/css/slick-theme.css" },
      { rel: "stylesheet", href: "/assets/css/style.css" },
      { rel: "stylesheet", href: "/assets/css/responsive.css" },
    ];

    const loadCSS = (linkTag) => {
      return new Promise((resolve, reject) => {
        const { rel, type, href } = linkTag;
        const linkElement = document.createElement("link");
        linkElement.rel = rel;
        if (type) linkElement.type = type;
        linkElement.href = href;
        linkElement.onload = resolve;
        linkElement.onerror = reject;
        document.head.appendChild(linkElement);
      });
    };

    Promise.all(linkTags.map(loadCSS))
      .then(() => {
        alert(123);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load CSS:", error);
        setIsLoading(false); // Proceed even if CSS loading fails
      });

    return () => {
      linkTags.forEach((linkTag) => {
        const { rel, href } = linkTag;
        const linkElement = document.head.querySelector(
          `link[rel="${rel}"][href="${href}"]`
        );
        if (linkElement) document.head.removeChild(linkElement);
      });
    };
  }, []);

  const loadScripts = () => {
    const scripts = [
      "/assets/js/jquery-3.6.0.min.js",
      "/assets/js/popper.min.js",
      "/assets/bootstrap/js/bootstrap.min.js",
      "/assets/owlcarousel/js/owl.carousel.min.js",
      "/assets/js/magnific-popup.min.js",
      "/assets/js/waypoints.min.js",
      "/assets/js/parallax.js",
      "/assets/js/jquery.countdown.min.js",
      "/assets/js/imagesloaded.pkgd.min.js",
      "/assets/js/isotope.min.js",
      "/assets/js/jquery.dd.min.js",
      "/assets/js/slick.min.js",
      "/assets/js/jquery.fitvids.js",
      "/assets/js/jquery.elevatezoom.js",
      "/assets/js/scripts.js",
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const scriptElement = document.createElement("script");
        scriptElement.src = src;
        scriptElement.async = true;
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        document.body.appendChild(scriptElement);
      });
    };

    const loadNextScript = () => {
      if (scripts.length === 0) return Promise.resolve();

      const scriptSrc = scripts.shift();
      if (!scriptSrc) return Promise.resolve();

      return loadScript(scriptSrc).then(loadNextScript);
    };

    return loadNextScript()
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to load scripts:", error);
        setIsLoading(false); // Proceed even if script loading fails
      });
  };

  useEffect(() => {
    loadScripts();

    return () => {
      const scripts = [
        "/assets/js/jquery-3.6.0.min.js",
        "/assets/js/popper.min.js",
        "/assets/bootstrap/js/bootstrap.min.js",
        "/assets/owlcarousel/js/owl.carousel.min.js",
        "/assets/js/magnific-popup.min.js",
        "/assets/js/waypoints.min.js",
        "/assets/js/parallax.js",
        "/assets/js/jquery.countdown.min.js",
        "/assets/js/imagesloaded.pkgd.min.js",
        "/assets/js/isotope.min.js",
        "/assets/js/jquery.dd.min.js",
        "/assets/js/slick.min.js",
        "/assets/js/jquery.fitvids.js",
        "/assets/js/jquery.elevatezoom.js",
        "/assets/js/scripts.js",
      ];

      scripts.forEach((src) => {
        const scriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptElement) {
          document.body.removeChild(scriptElement);
        }
      });
    };
  }, []);

  return (
    <>
      <Head>
        {/* SITE TITLE */}
        <title>Homie</title>
      </Head>

      {isLoading ? (
        <div className="preloader">
          <div className="lds-ellipsis">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ) : (
        <>
          <div style={{ overflow: "hidden" }}>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <Header />
                <ButtonCustomer />

                <Component {...pageProps} />

                <Footer />
              </PersistGate>
            </Provider>
          </div>
        </>
      )}
    </>
  );
};

export default MyApp;
