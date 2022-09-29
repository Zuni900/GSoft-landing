import React from "react";
import { Grid, Box, TypographyProps, useMediaQuery, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";
import CommonButton from "components/Button/CommonButton";

interface Props extends TypographyProps {
  heading: string;
  desc: string;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
  image: StaticImageData;
}

const ComponentTwo = (props: Props) => {
  const { heading, desc, point1, point2, point3, point4, image } = props;
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container item md={11} lg={11} sm={12} className={cx(classes.box)}>
      <Grid container item md={5} sm={12} xs={12} className={cx(classes.grid)}>
        <Image src={image} alt="image" layout="fixed" />
      </Grid>

      <Grid container item md={6} sm={12} xs={12}>
        <Text
          variant="h2"
          name={heading}
          style={{
            marginTop: isMatch ? "4%" : "0%",
          }}
        />
        <Text className={cx(classes.text)} variant="body1" name={desc} />

        <Grid container className={cx(classes.points)}>
          <Box className={cx(classes.tick)}>
            <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.txt)} />
            <Text name={point1} variant="caption" />
          </Box>

          <Box className={cx(classes.tick)}>
            <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.txt)} />
            <Text name={point2} variant="caption" />
          </Box>

          <Box className={cx(classes.tick)}>
            <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.txt)} />
            <Text name={point3} variant="caption" />
          </Box>

          <Box className={cx(classes.tick)}>
            <Text name="✓" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.txt)} />
            <Text name={point4} variant="caption" />
          </Box>

          <Grid>
            <CommonButton name="Get quote" variant="contained" className={cx(classes.button)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ComponentTwo;
