import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";
import BenefitComponent from "../BenefitComponent";

import fund from "images/fund.png";
import interest from "images/interest.png";
import careerDev from "images/careerDev.png";
import medical from "images/medical.png";
import budget from "images/budget.png";
import support from "images/support.png";
import bonuse from "images/bonuse.png";
import cycle from "images/cycle.png";
import balance from "images/balance.png";
import leaves from "images/leaves.png";
import lunches from "images/lunches.png";
import celebration from "images/celebration.png";
import increments from "images/increments.png";
import environment from "images/environment.png";

const Benefits = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} xs={12} className={cx(classes.container)}>
      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variant="h5" variantMapping={{ h5: "h1" }} name="Benefits" />
      </Grid>

      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variantMapping={{ h2: "h2" }} variant="h2" name="How we care about you" />
      </Grid>

      <Grid container item md={9} sm={12} xs={12} className={cx(classes.description)}>
        <Text
          variant="body1"
          name="Our employees are our most important assets and our key value proposition is employee development and career growth. Our first priority is hiring from within and growing our employees through coaching, mentoring, and training, both internal and external. We also have a range of exciting initiatives including employee engagement, appreciation, and fun activities all year round."
        />
      </Grid>
      <Grid container item md={10} className={cx(classes.benefits)}>
        <BenefitComponent image={fund} text="Provident Fund" />
        <BenefitComponent image={interest} text="Interest-Free Loans" />
        <BenefitComponent image={careerDev} text="Professional Career Development" />
        <BenefitComponent image={medical} text="Medical Allowance" />
        <BenefitComponent image={budget} text="Dedicated L&D Budget" />
        <BenefitComponent image={support} text="Employee Support" />
        <BenefitComponent image={bonuse} text="Annually Performance Bonuses" />
        <BenefitComponent image={cycle} text="Well-Defined Promotion Cycle" />
        <BenefitComponent image={balance} text="Work-Life Balance" />
        <BenefitComponent image={leaves} text="Paid Leaves and Vacations" />
        <BenefitComponent image={lunches} text="Monthly Team Lunches" />
        <BenefitComponent image={celebration} text="Birthday / Festival Celebration" />
        <BenefitComponent image={increments} text="Semi-Annual Increments" />
        <BenefitComponent image={environment} text="Learning and Flexible Environment" />
      </Grid>
    </Grid>
  );
};

export default Benefits;
