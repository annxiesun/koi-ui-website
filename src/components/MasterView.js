import React from "react";
import { Header, Features, Demo } from "./content";
import { Container } from "@mui/material";

function MasterView() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Features />
      <Demo />
    </Container>
  );
}

export default MasterView;
