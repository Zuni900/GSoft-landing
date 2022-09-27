import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import ComponentOne from "../ServiceComponentOne";
import ComponentTwo from "../ServicesComponentTwo";
import s1 from "../../../../public/images/s1.png";
import s2 from "../../../../public/images/s2.png";
import s3 from "../../../../public/images/s3.png";

const Services = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={12} lg={11} sm={12} className={cx(classes.block)}>
        <Grid container className={cx(classes.txt)}>
          <Text name="Our Services" variantMapping={{ h5: "p" }} variant="h5" />
          <Text variant="h2" name="We Provide Web Development Service" />
        </Grid>

        <Grid container className={cx(classes.grid)}>
          <ComponentOne
            heading="Classified Website Development Service"
            desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
            point1="Top rank SEO website to generate more and more credible leads."
            point2="Dedicated and passionate account manager."
            point3="Latest SEO trends and marketing strategies."
            point4="Monthly reporting and critical analysis."
            image={s1}
          />
          <ComponentTwo
            heading="eCommerce Website Development Service"
            desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
            point1="Top rank SEO website to generate more and more credible leads."
            point2="Dedicated and passionate account manager."
            point3="Latest SEO trends and marketing strategies."
            point4="Monthly reporting and critical analysis."
            image={s2}
          />
          <ComponentOne
            heading="Web Development in React JS"
            desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
            point1="Top rank SEO website to generate more and more credible leads."
            point2="Dedicated and passionate account manager."
            point3="Latest SEO trends and marketing strategies."
            point4="Monthly reporting and critical analysis."
            image={s3}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
