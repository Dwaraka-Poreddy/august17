import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AddElement from "../components/AddElement";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <div>
      <hr />
    </div>
    <AddElement />
    <main className="site-content">{children}</main>
    <Footer />
  </>
);

export default LayoutDefault;
