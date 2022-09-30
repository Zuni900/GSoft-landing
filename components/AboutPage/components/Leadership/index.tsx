import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";
import LeadershipComponent from "../LeadershipComponent";

import team1 from "images/team1.png";
import team2 from "images/team2.png";
import team3 from "images/team3.png";
import team4 from "images/team4.png";
import team5 from "images/team5.png";
import team6 from "images/team6.png";

const Leadership = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <Text name="Leadership" variant="h5" variantMapping={{ h5: "p" }} />
        <Text name="Meet Our Team" variant="h2" />
        <Grid container className={cx(classes.grid)}>
          <LeadershipComponent
            image={team1}
            name="Marck Jack"
            title="CEO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
          <LeadershipComponent
            image={team2}
            name="Jane Cooper"
            title="CTO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
          <LeadershipComponent
            image={team3}
            name="Wade Warren"
            title="COO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
          <LeadershipComponent
            image={team4}
            name="Devon Lane"
            title="CTO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
          <LeadershipComponent
            image={team5}
            name="Cody Fisher"
            title="CEO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
          <LeadershipComponent
            image={team6}
            name="Jerome Bell"
            title="CEO"
            desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Leadership;
