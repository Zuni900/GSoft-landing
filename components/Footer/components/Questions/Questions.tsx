import React from "react";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import questions from "../../../../public/images/questions.png";
import CommonButton from "../../../Button/CommonButton";

const Questions = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [isActive, setIsActive] = React.useState(true);
  const [icon, setIcon] = React.useState("+");

  const handleBoxClick = () => {
    setIsActive(false);
    setIcon("-");
  };
  const handleBoxClose = () => {
    setIsActive(true);
    setIcon("+");
  };

  return (
    <Grid container className={cx(classes.container)}>
      <Grid className={cx(classes.box)}>
        {isMatch ? (
          <Grid container>
            <Text variant="h2" name="Frequently Ask Questions" />

            <Grid className={cx(classes.block)}>
              {isActive ? (
                <Box className={cx(classes.ques)} onClick={handleBoxClick}>
                  <Text variant="h4" variantMapping={{ h4: "body1" }} name={icon} className={cx(classes.text)} />
                  <Text variant="h5" variantMapping={{ h5: "body1" }} name="Why is SEO important for Businesses?" />
                </Box>
              ) : (
                <>
                  <Box className={cx(classes.ques)} onClick={handleBoxClose}>
                    <Text variant="h4" variantMapping={{ h4: "body1" }} name={icon} className={cx(classes.text)} />
                    <Text variant="h5" variantMapping={{ h5: "body1" }} name="Why is SEO important for Businesses?" />
                  </Box>
                  <Grid className={cx(classes.txtGrid)}>
                    <Text
                      className={cx(classes.txt)}
                      variant="body1"
                      name="Every business be it a clothing brand, restaurant, marketing agency or a small-scale business are reaping the benefits of SEO. For meaningful and effective marketing, SEO is the key. "
                    />
                  </Grid>
                </>
              )}

              <Box className={cx(classes.ques)}>
                <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                <Text
                  variant="h5"
                  variantMapping={{ h5: "body1" }}
                  name="Are there any specific guidelines as to what is allowed in SEO?"
                />
              </Box>

              <Box className={cx(classes.ques)}>
                <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                <Text variant="h5" variantMapping={{ h5: "body1" }} name="Why is it important to hire an SEO agency?" />
              </Box>

              <Box className={cx(classes.ques)}>
                <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                <Text variant="h5" variantMapping={{ h5: "body1" }} name="What does online/digital marketing entail?" />
              </Box>
            </Grid>

            <CommonButton variant="contained" name="Discover more →" className={cx(classes.button)} />
          </Grid>
        ) : (
          <Grid container className={cx(classes.topGrid)}>
            <Grid container item md={6} className={cx(classes.innerGrid)}>
              <Text variant="h2" name="Frequently Ask Questions" />

              <Grid className={cx(classes.block)}>
                {isActive ? (
                  <Box className={cx(classes.ques)} onClick={handleBoxClick}>
                    <Text variant="h4" variantMapping={{ h4: "body1" }} name={icon} className={cx(classes.text)} />
                    <Text variant="h5" variantMapping={{ h5: "body1" }} name="Why is SEO important for Businesses?" />
                  </Box>
                ) : (
                  <>
                    <Box className={cx(classes.ques)} onClick={handleBoxClose}>
                      <Text variant="h4" variantMapping={{ h4: "body1" }} name={icon} className={cx(classes.text)} />
                      <Text variant="h5" variantMapping={{ h5: "body1" }} name="Why is SEO important for Businesses?" />
                    </Box>
                    <Grid className={cx(classes.txtGrid)}>
                      <Text
                        className={cx(classes.txt)}
                        variant="body1"
                        name="Every business be it a clothing brand, restaurant, marketing agency or a small-scale business are reaping the benefits of SEO. For meaningful and effective marketing, SEO is the key. "
                      />
                    </Grid>
                  </>
                )}

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                  <Text
                    variant="h5"
                    variantMapping={{ h5: "body1" }}
                    name="Are there any specific guidelines as to what is allowed in SEO?"
                  />
                </Box>

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                  <Text
                    variant="h5"
                    variantMapping={{ h5: "body1" }}
                    name="Why is it important to hire an SEO agency?"
                  />
                </Box>

                <Box className={cx(classes.ques)}>
                  <Text variant="h4" variantMapping={{ h4: "body1" }} name="+" className={cx(classes.text)} />
                  <Text
                    variant="h5"
                    variantMapping={{ h5: "body1" }}
                    name="What does online/digital marketing entail?"
                  />
                </Box>
              </Grid>

              <CommonButton variant="contained" name="Discover more →" className={cx(classes.button)} />
            </Grid>

            <Grid>
              <Image alt="img" src={questions} width="488px" height="404px" layout="fixed" />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Questions;
