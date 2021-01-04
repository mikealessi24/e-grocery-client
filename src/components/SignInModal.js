import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { Auth } from "aws-amplify";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    left: "25%",
    top: "25%",
    width: 800,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function signUp(e) {
    e.preventDefault();
    console.log(e.target.elements);
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const email = e.target.elements.email.value;
    console.log(username);
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }

  async function confirmSignUp(e) {
    const username = e.target.elements.username.value;
    const code = e.target.elements.username.value;
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">sign in</h2>
      <div id="simple-modal-description">
        <form>
          <input type="text" />
          <input type="text" />
        </form>
        <br />
        <form onSubmit={(e) => signUp(e)}>
          <input type="text" placeholder="sign-up" name="username" />
          <input type="text" name="password" />
          <input type="text" name="email" />
          <button type="submit">submit</button>
        </form>
        <form onSubmit={(e) => confirmSignUp(e)}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="code" name="code" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      <div onClick={handleOpen}>Sign in</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
