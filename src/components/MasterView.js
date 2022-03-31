import React from "react";
import { Header, Features, Demo, Design } from "./content";
import { Container } from "@mui/material";
import { DiscordBanner, Navbar, Footer } from "./widgets";

function MasterView() {
  return (
    <Container maxWidth="xl">
      <Navbar />
      <Header />
      <Features />
      <Demo />
      <Design />
      <DiscordBanner />
      <Footer />
    </Container>
  );
}

export default MasterView;
