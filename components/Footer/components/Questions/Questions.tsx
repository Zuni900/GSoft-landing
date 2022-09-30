import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";
import questions from "public/images/questions.png";
import CommonButton from "components/Button/CommonButton";

const Questions = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [isActive, setIsActive] = React.useState(true);

  const handleBoxClick = () => {
    isActive ? setIsActive(false) : setIsActive(true);
  };

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={11} sm={11} className={cx(classes.box)}>
        <Grid container item md={7} sm={12}>
          <Text variant="h2" name="Frequently Ask Questions" />

          <Grid className={cx(classes.block)}>
            <Box className={cx(classes.ques)} onClick={handleBoxClick}>
              {isActive ? (
                <Text variant="h4" variantMapping={{ h4: "p" }} name="+" className={cx(classes.text)} />
              ) : (
                <Text variant="h4" variantMapping={{ h4: "p" }} name="-" className={cx(classes.text)} />
              )}
              <Text variant="h5" variantMapping={{ h5: "p" }} name="Why is SEO important for Businesses?" />
            </Box>
            {!isActive ? (
              <Grid className={cx(classes.txtGrid)}>
                <Text
                  className={cx(classes.txt)}
                  variant="body1"
                  name="Every business be it a clothing brand, restaurant, marketing agency or a small-scale business are reaping the benefits of SEO. For meaningful and effective marketing, SEO is the key. "
                />
              </Grid>
            ) : (
              ""
            )}

            <Box className={cx(classes.ques)}>
              <Text variant="h4" variantMapping={{ h4: "p" }} name="+" className={cx(classes.text)} />
              <Text
                variant="h5"
                variantMapping={{ h5: "p" }}
                name="Are there any specific guidelines as to what is allowed in SEO?"
              />
            </Box>

            <Box className={cx(classes.ques)}>
              <Text variant="h4" variantMapping={{ h4: "p" }} name="+" className={cx(classes.text)} />
              <Text variant="h5" variantMapping={{ h5: "p" }} name="Why is it important to hire an SEO agency?" />
            </Box>

            <Box className={cx(classes.ques)}>
              <Text variant="h4" variantMapping={{ h4: "p" }} name="+" className={cx(classes.text)} />
              <Text variant="h5" variantMapping={{ h5: "p" }} name="What does online/digital marketing entail?" />
            </Box>
          </Grid>

          <CommonButton variant="contained" name="Discover more →" className={cx(classes.button)} />
        </Grid>
        {!isMatch ? (
          <Grid container item md={5}>
            <Image alt="img" src={questions} layout="fixed" />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default Questions;
