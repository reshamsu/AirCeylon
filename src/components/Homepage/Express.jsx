import React from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const expressOptions = [
  {
    title: "For Inquiries / Consultations",
    button: "Call Us",
    iconPng: "/assets/express1.png",
    phone: "+94760301141",
  },
  {
    title: "To Set an Appointment For Visit / Service",
    button: "Book Now",
    iconPng: "/assets/express2.png",
    phone: "+94760301141",
  },
  {
    title: "To Begin IELTS Training",
    button: "Register Now",
    iconPng: "/assets/express3.png",
    phone: "+94760301141",
    // direct: "/checkout",
  },
];

const Express = () => {
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
                {item.iconPng && (
                  <img
                    src={item.iconPng}
                    alt={item.button}
                    style={{ width: "44%", marginBottom: "1rem" }}
                  />
                )}

                <div className="caller">
                  {item.phone ? (
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
                      className="btn btn-primary"
                      component={Link}
                      to={item.direct}
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
      </Container>
    </div>
  );
};

export default Express;
