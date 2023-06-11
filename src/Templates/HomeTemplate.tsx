// tsrfc
import React from "react";
import Header from "../Components/Header/Header";
import HeaderMobile from "../Components/Header/HeaderMobile";
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

      <footer className="bg-dark text-white text-center">Footer</footer>
    </>
  );
};

export default HomeTemplate;
