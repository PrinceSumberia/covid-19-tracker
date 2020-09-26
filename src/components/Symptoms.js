import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Footer from "./Footer";

import styles from "../styles/SymptomsStyles";

class Symptoms extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.symptoms}>
        <h2 className={classes.heading}>
          <span>COVID-19 Coronavirus</span> - Symptoms
        </h2>
        <div className={classes.content}>
          <div className={classes.mainContent}>
            <div className={classes.alert}>
              <p>
                There’s currently no vaccine to prevent coronavirus disease
                (COVID-19). So, take the necessary preventive measures.
              </p>
            </div>
            <div className={classes.symptomsMain}>
              <p>
                On average it takes 5–6 days from when someone is infected with
                the virus for symptoms to show, however it can take up to 14
                days. People with mild symptoms who are otherwise healthy should
                self-isolate. Seek medical attention if you have a fever, a
                cough, and difficulty breathing.
              </p>
            </div>
            <div className={classes.symptomsDiv}>
              <p>
                COVID-19 affects different people in different ways. Most
                infected people will develop mild to moderate symptoms.
              </p>
              <h5 className={classes.symptomsHeading}>Common symptoms</h5>
              <ul className={classes.sympList}>
                <li>fever.</li>
                <li>tiredness.</li>
                <li>dry cough.</li>
              </ul>
              <h5 className={classes.symptomsHeading}>
                Some people may experience
              </h5>
              <ul className={classes.sympList}>
                <li>aches and pains.</li>
                <li>nasal congestion.</li>
                <li>runny</li>
                <li>nose.</li>
                <li>sore throat.</li>
                <li>diarrhoea.</li>
              </ul>
            </div>
            <small className={classes.info}>
              These are for informational purposes only. Consult your local
              medical authority for advice. (Source: World Health Organization)
            </small>
          </div>
          <div className={classes.sidebar}>
            <div className={classes.video}>
              <iframe
                title="coronavirus-who"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bPITHEiFWLc"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <h3>Useful Links</h3>
              <ul className={classes.helpfulLinks}>
                <li>
                  <Link className={classes.link} to="/stay-safe">
                    Prevention of Coronavirus.
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <a
                    className={classes.link}
                    href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more on who.int
                    <span>&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Symptoms);
