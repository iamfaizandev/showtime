import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import "./faq.css";
import { Register } from "../register/register";
import useWindowResize from "../../hooks/useWindowResize";
import { PhoneSignUp } from "../phoneSignup/phoneSignUp";

export default function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const { width, height } = useWindowResize();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className="faq_section">
      <div className="container-fluid faq_container">
        <div className="faq_text">Frequently Asked Questions</div>
        <div className="faq">
          <Accordion
            className="accordion"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>
                <span className="faq_question"> What is ShowTime</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  ShowTime is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad – all
                  for one low monthly price. There's always something new to
                  discover, and new TV shows and movies are added every week!
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography>
                <span className="faq_question">
                  How much does ShowTime Cost
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography>
                <span className="faq_question"> Where can I watch ?</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  Watch anywhere, anytime. Sign in with your ShowTime account to
                  watch instantly on the web at ShowTime.com from your personal
                  computer or on any internet-connected device that offers the
                  ShowTime app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while you're on the go
                  and without an internet connection. Take ShowTime with you
                  anywhere.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>
                <span className="faq_question">How do I cancel</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  ShowTime is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>
                <span className="faq_question">
                  What can I watch on ShowTime
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  ShowTime has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning ShowTime
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="accordion"
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<AddIcon className="add_icon" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography>
                <span className="faq_question">is ShowTime good for kids?</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="faq_details">
              <Typography>
                <span className="faq_answer">
                  The ShowTime Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="fa_register ">
          {width > 600 ? (
            <Register className="faq_reg" />
          ) : (
            <PhoneSignUp className="faq_reg" />
          )}
        </div>
      </div>
    </section>
  );
}
