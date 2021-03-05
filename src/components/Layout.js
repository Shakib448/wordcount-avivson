import { Box } from "@material-ui/core";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box>
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
