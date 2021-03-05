import { Box, Container } from "@material-ui/core";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Container>
        <main>{children}</main>
      </Container>
    </Box>
  );
};

export default Layout;
