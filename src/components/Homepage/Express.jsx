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
import { Link, useNavigate } from "react-router-dom";

import express1 from "../../assets/express1.png";
import express2 from "../../assets/express2.png";
import express3 from "../../assets/express3.png";

// Reuse exact product list from EPTPackages
const products = [
  {
    id: 1,
    name: "Course ZERO (Free)",
    sessions: 20,
    duration: "6 months",
    price: 0,
  },
  {
    id: 2,
    name: "Crash Course",
    sessions: 5,
    duration: "Customizable",
    price: 25000,
  },
  {
    id: 3,
    name: "Essential Course",
    sessions: 10,
    duration: "Customizable",
    price: 50000,
  },
  {
    id: 4,
    name: "Pro Course",
    sessions: 20,
    duration: "Customizable",
    price: 100000,
  },
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
  const navigate = useNavigate();
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

  const handleRedirectToCheckout = () => {
    const selectedProduct = products.find(
      (p) => p.name === formData.course
    );
    if (selectedProduct) {
      navigate("/checkout/add-items", { state: { product: selectedProduct } });
    }
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
                    <a href={`tel:${item.phone}`} style={{ textDecoration: "none" }}>
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

        {/* Dialog Steps */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>
            {step === 1
              ? "Select a Course"
              : step === 2
              ? "Candidate Registration"
              : "Proceed to Payment"}
          </DialogTitle>

          <DialogContent>
            {step === 1 &&
              products.map((course, i) => (
                <Button
                  key={i}
                  onClick={() => setFormData({ ...formData, course: course.name })}
                  className="btn btn-outline-primary"
                  variant={formData.course === course.name ? "contained" : "outlined"}
                  fullWidth
                  style={{
                    boxShadow: "none",
                    border: "1px solid #ddd",
                    margin: "8px 0",
                  }}
                >
                  {course.name} – {course.sessions} sessions
                </Button>
              ))}

            {step === 2 && (
              <>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  margin="normal"
                />
                <TextField
                  label="Gmail Address"
                  name="gmail"
                  fullWidth
                  required
                  type="email"
                  value={formData.gmail}
                  onChange={handleChange}
                  error={
                    formData.gmail && !formData.gmail.endsWith("@gmail.com")
                  }
                  helperText={
                    formData.gmail &&
                    !formData.gmail.endsWith("@gmail.com") &&
                    "Please use a valid Gmail address"
                  }
                  margin="normal"
                />
                <input
                  type="file"
                  name="document"
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                  onChange={handleChange}
                  style={{ marginTop: "1rem" }}
                />
              </>
            )}

            {step === 3 && (
              <Typography>
                ✅ All information complete. Click “Pay Now” to proceed to checkout.
              </Typography>
            )}
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            {step < 3 ? (
              <Button
                variant="contained"
                onClick={handleNext}
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
                onClick={handleRedirectToCheckout}
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
