import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import emailjs from "emailjs-com";

import "./ContactForm.css";
const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255, 255, 255, 0.025)",
  },

  input: {
    color: "white",
    margin: "20px 30px",
  },
  submitButton: {
    marginTop: theme.spacing(2),
    marginLeft: 30,
    marginBottom: 20,
    maxWidth: 200,
  },
}));

const EmailForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm(
        "service_zi866iq",
        "template_sfbtn1l",
        e.target,
        "NglH3nzrtleJ1XVrl"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log("Email submitted:", email);
    setName(""); // Reset the form
    setEmail(""); // Reset the form
    setMessage(""); // Reset the form
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Typography
        variant="h5"
        style={{
          alignItems: "center",
          alignSelf: "center",
          marginTop: 30,
          fontWeight: "bold",
        }}
      >
        Contact Me
      </Typography>
      <FormControl className={classes.input}>
        <FormLabel color="white">Name</FormLabel>
        <FormGroup>
          <TextField
            type="text"
            variant="outlined"
            name="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </FormGroup>
      </FormControl>
      <FormControl className={classes.input}>
        <FormLabel>Email</FormLabel>
        <FormGroup>
          <TextField
            type="email"
            name="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormGroup>
      </FormControl>
      <FormControl className={classes.input}>
        <FormLabel>Message</FormLabel>
        <FormGroup>
          <TextField
            type="text"
            name="Message"
            value={message}
            variant="outlined"
            onChange={handleMsgChange}
            style={{ height: 80 }}
            required
          />
        </FormGroup>
      </FormControl>
      <Button
        className={classes.submitButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default EmailForm;
