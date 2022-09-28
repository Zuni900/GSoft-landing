import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";

import Image from "next/image";
import Development1 from "../../public/Services/Development1.png";
import Development from "../../public/Services/Development.png";
import Development2 from "../../public/Services/Development2.png";
import Development3 from "../../public/Services/Development3.png";
import Development4 from "../../public/Services/Development4.png";
import Development5 from "../../public/Services/Development5.png";
function Services() {
  const TechnologiesData = [
    {
      name: "Web Development",
      image: Development,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development1,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development2,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development3,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development4,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development5,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development5,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
    {
      name: "Web Development",
      image: Development5,
      description:
        "We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces.",
    },
  ];
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.containerServices)}>
      <Grid
        container
        item
        md={10}
        sm={12}
        xs={12}
        className={cx(classes.descriptionServices)}
      >
        {TechnologiesData.map((item, index) => (
          <Grid
            container
            key={index}
            item
            sm={6}
            xs={12}
            md={2.5}
            className={cx(classes.container)}
          >
            <Image
              src={item.image.src}
              alt="image"
              height="56"
              width="70"
              className={cx(classes.img)}
            />
            <Text
              className={cx(classes.styling)}
              variant="h3"
              name={item.name}
            />
            <Text
              variant="body2"
              name={item.description}
              className={cx(classes.styling)}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Services;
