// tsrfc
import React from "react";
import Header from "../Components/Header/Header";
import HeaderMobile from "../Components/Header/HeaderMobile";
import Footer from "../Components/Footer/Footer";
import FooterMobile from "../Components/Footer/FooterMobile";
import ResponsiveItem from "./ResponsiveItem";
import { Outlet } from "react-router-dom";

type Props = {};

// eslint-disable-next-line no-empty-pattern
const HomeTemplate: React.FC = ({}: Props): JSX.Element => {
  return (
    <>
      <ResponsiveItem component={Header} largeTableComponent={HeaderMobile} />
      <div className="content-layout" style={{ minHeight: "80vh" }}>
        <Outlet></Outlet>
      </div>

      <ResponsiveItem component={Footer} largeTableComponent={FooterMobile} />
    </>
  );
};

export default HomeTemplate;
