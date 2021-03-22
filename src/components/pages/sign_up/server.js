const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fatehfitnessclient@gmail.com",
    pass: "fateh123",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const contactNumber = req.body.contactNumber;
  const mail = {
    from: firstName + lastName,
    to: "fatehfitnessclient@gmail.com",
    subject: "Trial Booking",
    html: `<p>Name:${firstName + lastName}</p>
    <p>Email:${email}</p>
    <p>Contact Number: +91-${contactNumber}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      req.json({ status: "Message Sent" });
    }
  });
});
