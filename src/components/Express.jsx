import React, { useState } from "react";
import { Container, Modal, Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const expressOptions = [
  {
    title: "For Inquiries or Consultations",
    description:
      "Our dedicated team is here to assist you with travel-related inquiries, visa consultation, and service clarifications. Whether you're planning your first trip or need guidance on our packages, we offer professional advice tailored to your needs.",
    button: "Call Us",
    phone: "+94 77 123 4567",
    email: "info@airceylon.com",
    details: "You can reach us by phone or by visiting our Contact page for more.",
    isModal: true,
  },
  {
    title: "To Make a Visit for an Appointment",
    description:
      "Schedule a one-on-one consultation at your convenience. Meet with our travel experts in person to discuss your travel plans, document assistance, or training options in a personalized setting.",
    button: "Book Now",
    phone: "+94 77 123 4567",
    email: "info@airceylon.com",
    details: "Use our booking form or call to reserve an appointment at your convenience.",
    isModal: true,
  },
  {
    title: "To Begin IELTS Training",
    description:
      "Start your journey toward global education and career success with our comprehensive IELTS training programs. Designed by certified instructors, our courses prepare you to achieve your desired band score through expert guidance and structured practice.",
    button: "Register Now",
    details: "Enroll in our IELTS programs by registering through our online portal or at our office.",
    isModal: false,
    direct: "/checkout",
  },
];

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid var(--text-gold-hover)",
  boxShadow: 24,
  borderRadius: "12px",
  padding: "2rem",
  width: "90%",
  maxWidth: 600,
};

const Express = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const handleOpen = (index) => {
    setOpenModalIndex(index);
  };

  const handleClose = () => {
    setOpenModalIndex(null);
  };

  return (
    <div className="express" style={{ padding: "2rem 0" }}>
      <Container>
        <div className="container-fluid" style={{ marginBottom: "1.5rem" }}>
          <label style={{ color: "var(--text-gold-hover)" }}>Express</label>
          <h1>
            Express <span style={{ color: "var(--text-gold-hover)" }}>Links</span>
          </h1>
        </div>

        <div className="container-lg">
          {expressOptions.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <h3 className="card-title" style={{ marginBottom: "1rem" }}>
                  {item.title}
                </h3>
                {item.isModal ? (
                  <Button
                    variant="contained"
                    className="btn btn-light"
                    onClick={() => handleOpen(index)}
                  >
                    {item.button}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className="btn btn-light"
                    component={Link}
                    to={item.direct || "/"}
                  >
                    {item.button}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {openModalIndex !== null && expressOptions[openModalIndex]?.isModal && (
          <Modal open onClose={handleClose}>
            <Box sx={modalStyle}>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  color: "#888",
                }}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <h2 style={{ fontWeight: "700", marginBottom: "1rem" }}>
                {expressOptions[openModalIndex].title}
              </h2>
              <p>{expressOptions[openModalIndex].description}</p>

              {expressOptions[openModalIndex].phone && (
                <div style={{ margin: "1rem 0" }}>
                  <label>Phone:</label>
                  <h4 style={{ fontWeight: "600" }}>{expressOptions[openModalIndex].phone}</h4>
                </div>
              )}

              {expressOptions[openModalIndex].email && (
                <div style={{ marginBottom: "1rem" }}>
                  <label>Email Address:</label>
                  <h4 style={{ fontWeight: "600" }}>{expressOptions[openModalIndex].email}</h4>
                </div>
              )}

              <p>{expressOptions[openModalIndex].details}</p>
            </Box>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default Express;
