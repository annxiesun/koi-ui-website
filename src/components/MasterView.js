import React from "react";
import { Header, Features, Demo, Design } from "./content";
import { Container } from "@mui/material";

function MasterView() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Features />
      <Demo />
      <Design />
    </Container>
  );
}

export default MasterView;
