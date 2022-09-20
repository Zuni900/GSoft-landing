import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

import Text from "../Typography";
import { useStyles } from "./styles";
import CommonButton from "../Button/CommonButton";
import amico from "../../public/images/amico.png";

const TopCard = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} className={cx(classes.container)}>
      <Grid sx={{ width: "1150px", display: "flex", justifyContent: "center" }}>
        <Grid item md={3.5} sm={6}>
          <Grid className={cx(classes.typo)}>
            <Text className={cx(classes.style)} variant="h4" name="We're" />
            <Text className={cx(classes.gsoft)} variant="h4" name=" Gsoft," />
          </Grid>
          <Text className={cx(classes.style)} variant="h4" name="Best Digital Partner" />
          <Text
            variant="body1"
            className={cx(classes.desc)}
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />
          <CommonButton variant="outlined" name="Let's discuss your project" className={cx(classes.button)} />
        </Grid>

        <Grid sx={{ marginLeft: "30px", marginTop: "60px" }}>
          <Image src={amico} alt="image" width={214} height={199} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopCard;
