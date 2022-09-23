import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Text from "../Typography";
import questions from "../../public/images/questions.png";
import CommonButton from "../Button/CommonButton";

const Questions = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    alert("Box click");
  };

  return (
    <Grid container className={cx(classes.container)}>
      <Grid className={cx(classes.box)}>
        {isMatch ? (
          <Grid>
            <Grid container xs={8} sm={12}>
              <Text variant="h2" name="Frequently Ask Questions" />
            </Grid>

            <Grid sx={{ marginTop: "7%" }}>
              <Box className={cx(classes.ques)}>
                <Text variant="h4" name="+" className={cx(classes.text)} />
                <Text variant="subtitle2" name="Why is SEO important for Businesses?" />
              </Box>

              <Box className={cx(classes.ques)}>
                <Text variant="h4" name="+" className={cx(classes.text)} />
                <Text variant="subtitle2" name="Are there any specific guidelines as to what is allowed in SEO?" />
              </Box>

              <Box className={cx(classes.ques)}>
                <Text variant="h4" name="+" className={cx(classes.text)} />
                <Text variant="subtitle2" name="Why is it important to hire an SEO agency?" />
              </Box>

              <Box className={cx(classes.ques)}>
                <Text variant="h4" name="+" className={cx(classes.text)} />
                <Text variant="subtitle2" name="What does online/digital marketing entail?" />
              </Box>
            </Grid>

            <CommonButton variant="contained" name="Discover more →" className={cx(classes.button)} />
          </Grid>
        ) : (
          <>
            <Grid>
              <Text variant="h2" name="Frequently Ask Questions" />

              <Grid sx={{ marginTop: "7%" }}>
                <Box className={cx(classes.ques)} onClick={handleBoxClick}>
                  <Text variant="h4" name="+" className={cx(classes.text)} />
                  <Text variant="subtitle2" name="Why is SEO important for Businesses?" />
                </Box>

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" name="+" className={cx(classes.text)} />
                  <Text variant="subtitle2" name="Are there any specific guidelines as to what is allowed in SEO?" />
                </Box>

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" name="+" className={cx(classes.text)} />
                  <Text variant="subtitle2" name="Why is it important to hire an SEO agency?" />
                </Box>

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" name="+" className={cx(classes.text)} />
                  <Text variant="subtitle2" name="What does online/digital marketing entail?" />
                </Box>
              </Grid>

              <CommonButton variant="contained" name="Discover more →" className={cx(classes.button)} />
            </Grid>

            <Grid>
              <Image alt="img" src={questions} width="488px" height="404px" layout="fixed" />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Questions;
