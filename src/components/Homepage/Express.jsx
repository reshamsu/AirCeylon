import React, { useState } from "react";
import {
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

// Import images
import express1 from "../../assets/express1.png";
import express2 from "../../assets/express2.png";
import express3 from "../../assets/express3.png";

// Sample Courses
const courses = [
  { name: "Course Zero (Free)", sessions: 20 },
  { name: "Crash Course", sessions: 5 },
  { name: "Essential Course", sessions: 10 },
  { name: "Pro Course", sessions: 20 },
];

const expressOptions = [
  {
    title: "For Inquiries / Consultations",
    button: "Call Us",
    iconPng: express1,
    phone: "+94760301141",
  },
  {
    title: "To Set an Appointment For Visit / Service",
    button: "Book Now",
    iconPng: express2,
    direct: "/contact-us",
  },
  {
    title: "To Begin IELTS Training",
    button: "Register Now",
    iconPng: express3,
  },
];

const Express = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    course: "",
    firstName: "",
    lastName: "",
    gmail: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = () => {
    if (step === 1 && formData.course) {
      setStep(2);
    } else if (
      step === 2 &&
      formData.firstName &&
      formData.lastName &&
      formData.gmail.endsWith("@gmail.com") &&
      formData.document
    ) {
      setStep(3);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setStep(1);
    setFormData({
      course: "",
      firstName: "",
      lastName: "",
      gmail: "",
      document: null,
    });
  };

  return (
    <div className="landing-express" style={{ padding: "2rem 0" }}>
      <Container>
        <div className="container-fluid">
          <label>Express</label>
          <h1>
            Express <span className="gradient-text">Lane</span>
          </h1>
        </div>

        <div className="container-lg">
          {expressOptions.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <img
                  src={item.iconPng}
                  alt={item.button}
                  style={{ width: "44%", marginBottom: "1rem" }}
                />
                <div className="caller">
                  {item.button === "Register Now" ? (
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      onClick={() => setOpen(true)}
                    >
                      {item.button}
                    </Button>
                  ) : item.phone ? (
                    <a
                      href={`tel:${item.phone}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button variant="contained" className="btn btn-primary">
                        {item.button}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="contained"
                      component={Link}
                      to={item.direct}
                      className="btn btn-primary"
                    >
                      {item.button}
                    </Button>
                  )}
                  <h4 className="card-title">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Pop-Up */}
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
          PaperProps={{
            style: {
              borderRadius: "14px",
              padding: "1rem",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              backgroundColor: "#fff",
            },
          }}
        >
          <DialogTitle
            style={{
              textAlign: "center",
              fontWeight: 660,
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {step === 1
              ? "Select a Course"
              : step === 2
              ? "Candidate Registration"
              : "Proceed to Payment"}
          </DialogTitle>

          <DialogContent>
            {step === 1 && (
              <>
                {courses.map((c, i) => (
                  <Button
                    key={i}
                    onClick={() =>
                      setFormData({ ...formData, course: c.name })
                    }
                    className="btn btn-outline-primary"
                    variant={formData.course === c.name ? "contained" : "outlined"}
                    fullWidth
                    style={{
                      margin: "8px 0",
                      borderRadius: "12px",
                      textTransform: "none",
                      fontWeight: 550,
                      backgroundColor:
                        formData.course === c.name ? "#a87c47" : "transparent",
                      color:
                        formData.course === c.name ? "#fff" : "#a87c47",
                      border:
                        formData.course === c.name
                          ? "none"
                          : "1px solid #a87c47",
                      boxShadow:
                        formData.course === c.name
                          ? "0 4px 10px rgba(25, 118, 210, 0.2)"
                          : "none",
                    }}
                  >
                    {c.name} – {c.sessions} sessions
                  </Button>
                ))}
              </>
            )}

            {step === 2 && (
              <>
                <TextField
                  margin="normal"
                  label="First Name"
                  name="firstName"
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  label="Gmail Address"
                  name="gmail"
                  type="email"
                  fullWidth
                  required
                  value={formData.gmail}
                  onChange={handleChange}
                  variant="outlined"
                  error={formData.gmail && !formData.gmail.endsWith("@gmail.com")}
                  helperText={
                    formData.gmail &&
                    !formData.gmail.endsWith("@gmail.com") &&
                    "Please enter a valid Gmail address"
                  }
                  sx={{ mb: 2 }}
                />
                <Typography sx={{ mb: 1 }}>Upload NIC/Passport</Typography>
                <input
                  type="file"
                  name="document"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                />
              </>
            )}

            {step === 3 && (
              <Typography
                align="center"
                color="green"
                fontWeight="bold"
                fontSize="1.1rem"
              >
                ✅ All information filled. Proceed to secure payment gateway.
              </Typography>
            )}
          </DialogContent>

          <DialogActions
            sx={{
              justifyContent: "space-between",
              paddingTop: "1.5rem",
            }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              className="btn btn-outline-primary"
              style={{ borderRadius: "12px", border: "none" }}
            >
              Cancel
            </Button>
            {step < 3 ? (
              <Button
                onClick={handleNext}
                variant="contained"
                className="btn btn-primary"
                style={{ borderRadius: "12px", border: "none" }}
                disabled={
                  (step === 1 && !formData.course) ||
                  (step === 2 &&
                    (!formData.firstName ||
                      !formData.lastName ||
                      !formData.gmail.endsWith("@gmail.com") ||
                      !formData.document))
                }
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                component={Link}
                to="/checkout/add-items"
                className="btn btn-primary"
                style={{ borderRadius: "12px" }}
              >
                Pay Now
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default Express;
