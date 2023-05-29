import { Grid } from "@material-ui/core";
import React from "react";
import ContactForm from "../../components/Contact Form/ContactForm";
import ContactDetail from "../../components/Contact Detail/ContactDetail";

const Contact = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <ContactForm />
      </Grid>
      <Grid item sm>
        <ContactDetail />
      </Grid>
    </Grid>
  );
};

export default Contact;
