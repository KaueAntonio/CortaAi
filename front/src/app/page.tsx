"use client";

import { Typography } from "@mui/material";
import * as React from "react";
import useStyles from "./styles";

const Home = () => {
  const styles = useStyles();

  return (
    <>
      <Typography sx={styles.root}>Home</Typography>
    </>
  );
};

export default Home;
