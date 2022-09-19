import React from "react"
import { Grid, TypographyProps } from "@mui/material"
import { useStyles } from "./styles"
import Text from "../Typography"
import Image from "next/image"

interface Props extends TypographyProps {
  image: string
  name1: string
  name2: string
  description: string
}

const Block = (props: Props) => {
  const { classes, cx } = useStyles()
  const { name1, name2, description, image } = props

  return (
    <Grid container sm={6} md={2.5} className={cx(classes.container)}>
      <Grid>
        <Image src={image} alt="image" width={80} height={80} className={cx(classes.bgcolor)} />
      </Grid>

      <Grid container className={cx(classes.text)}>
        <Text className={cx(classes.styling)} variant="body1" name={name1} />
        <Text className={cx(classes.styling)} variant="body1" name={name2} />
      </Grid>

      <Grid>
        <Text variant="subtitle2" name={description} />
      </Grid>
    </Grid>
  )
}

export default Block
