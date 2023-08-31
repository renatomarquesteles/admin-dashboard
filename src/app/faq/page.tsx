'use client'

import { Box, Typography, useTheme } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { Header } from '@/components/header'
import { tokens } from '@/styles/theme'

export default function FAQ() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box
      m="20px"
      sx={{
        '& .MuiPaper-root': {
          backgroundColor: colors.primary[400],
        },
      }}
    >
      <Header title="FAQ" subtitle="Frequently Asked Questions page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores cumque aliquam voluptas facilis ducimus, eos sequi error? Ex
            accusantium quisquam aliquam. Quas perspiciatis repudiandae nostrum
            dolorem, harum fugiat excepturi?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores cumque aliquam voluptas facilis ducimus, eos sequi error? Ex
            accusantium quisquam aliquam. Quas perspiciatis repudiandae nostrum
            dolorem, harum fugiat excepturi?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your favorite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores cumque aliquam voluptas facilis ducimus, eos sequi error? Ex
            accusantium quisquam aliquam. Quas perspiciatis repudiandae nostrum
            dolorem, harum fugiat excepturi?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores cumque aliquam voluptas facilis ducimus, eos sequi error? Ex
            accusantium quisquam aliquam. Quas perspiciatis repudiandae nostrum
            dolorem, harum fugiat excepturi?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            dolores cumque aliquam voluptas facilis ducimus, eos sequi error? Ex
            accusantium quisquam aliquam. Quas perspiciatis repudiandae nostrum
            dolorem, harum fugiat excepturi?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
