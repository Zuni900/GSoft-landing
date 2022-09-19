import React from "react"
import { Grid } from "@mui/material"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
// import Carousel from "react-material-ui-carousel"

import { useStyles } from "./styles"
import Text from "../Typography"
import Block from "../DevelopmentBlock"
import WebDev from "../../public/images/WebDev.png"
import AppDev from "../../public/images/AppDev.png"
import BackendDev from "../../public/images/BackendDev.png"
import WebDesign from "../../public/images/WebDesign.png"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MobileStepper from "@mui/material/MobileStepper"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"
import Stepper from "@mui/material/Stepper"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    id: 1,
    image: { BackendDev },
    data: (
      <Block
        name1="Web"
        name2="Development"
        image={WebDev}
        description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
      />
    ),
  },
  {
    id: 2,
    image: { BackendDev },
    data: (
      <Block
        image={BackendDev}
        name1="Backend"
        name2="Development"
        description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
      />
    ),
  },
  {
    id: 3,
    image: { BackendDev },
    data: (
      <Block
        image={AppDev}
        name1="Mobile"
        name2="Development"
        description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
      />
    ),
  },
  {
    id: 4,
    image: { BackendDev },
    data: (
      <Block
        image={WebDesign}
        name1="Web"
        name2="Design"
        description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
      />
    ),
  },
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Services = () => {
  const { classes, cx } = useStyles()

  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleStepChange = (step) => {
    setActiveStep(step)
  }

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container className={cx(classes.text)}>
        <Text variant="h5" name="Our 360° Services" className={cx(classes.styling)} />
      </Grid>
      <Grid container item md={10} className={cx(classes.description)}>
        <Block
          name1="Web"
          name2="Development"
          image={WebDev}
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={BackendDev}
          name1="Backend"
          name2="Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={AppDev}
          name1="Mobile"
          name2="Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={WebDesign}
          name1="Web"
          name2="Design"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />

        {/* <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
          {images.map((step, index) => (
            <div key={step.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Grid container className={cx(classes.description)}>
                  {images[activeStep].data}
                </Grid>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>*/}

        {/* <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          sx={{ display: "flex", justifyContent: "center", height: 400, width: 200, bgcolor: "pink" }}
          aria-label="scrollable auto tabs example"
        > */}
        {/* <Tab
            label={
              <Block
                name1="Web"
                name2="Development"
                image={WebDev}
                description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
              />
            }
          /> */}
        {/* <Tab
            component={() => {
              return (
                <Grid container md={2.5} sx={{ display: "flex", justifyContent: "center", width: 200 }}>
                  <Block
                    image={BackendDev}
                    name1="Backend"
                    name2="Development"
                    description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
                  />
                </Grid>
              )
            }}
          /> */}
        {/* <Tab
            label={
              <Block
                image={AppDev}
                name1="Mobile"
                name2="Development"
                description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
              />
            }
          />
          <Tab
            label={
              <Block
                image={WebDesign}
                name1="Web"
                name2="Design"
                description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
              />
            }
          /> */}
        {/* </Tabs> */}
      </Grid>
      {/* <MobileStepper steps={maxSteps} position="static" activeStep={activeStep} /> */}
      {/* <Stepper
        activeStep={0}
        sx={{ width: "80%", display: "flex", justifyItems: "space-between", justifyContent: "space-between" }}
      >
        {images.map((item, i) => (
          <Block
            name1={item.id}
            name2="Development"
            image={item.image}
            description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
          />
        ))}
      </Stepper> */}
      {/* <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel> */}
    </Grid>
  )
}

export default Services
