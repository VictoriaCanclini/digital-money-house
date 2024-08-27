import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const dashboard = () => {
  return (
    <>
      <section className="bg-[url('/img/Landing-page.jpg')] bg-cover bg-center h-screen">
        <Navbar />
        {/* <Footer /> */}
      </section>
    </>
  );
};

export default dashboard;
