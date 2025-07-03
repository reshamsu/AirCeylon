import React from "react";
import { Container } from "@mui/material";

const VisaWelcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            List of <span className="gradient-text">Definitions</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>
            The key to notarize your documents starts here.
          </p>
        </div>
        <div className="container-lg">
          <div className="card">
            <div className="card-group">
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h3>What is Notarization?</h3>
              <p>
                Notarization is when a certified lawyer (called a Notary Public)
                checks your document and confirms that it is real and
                trustworthy. The notary signs and places an official stamp on
                it. This proves that the document was seen and approved by a
                legal officer.
              </p>
              <h4>Why it's needed?</h4>
              <p>
                It is often required when you send documents for legal, visa, or
                business purposes, both locally and internationally.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h3>What is Authentication?</h3>
              <p>
                Authentication means that a government office checks whether the
                person who signed or notarized your document is a real and
                registered official. It confirms that the notary's or officer's
                signature and stamp are valid.
              </p>
              <h4>Why it's needed?</h4>
              <p>
                Many foreign embassies or employers want proof that your
                notarized documents are truly legal and genuine.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h3>What is Verification?</h3>
              <p>
                Verification is the process of checking that the details or
                documents you give are correct, true, and not fake. It can be
                done by companies, schools, banks, or government officers.
              </p>
              <h4>Why it's needed?</h4>
              <p>
                To make sure you are giving honest information and that your
                documents are valid.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h3>What is Attestation?</h3>
              <p>
                Attestation is when a government or official department checks
                your document and places a stamp or signature to confirm that it
                is original and correct. This is usually done after notarization
                and authentication.
              </p>
              <h4>Why it’s needed?</h4>
              <p>
                Most countries (especially Gulf countries like UAE, Qatar, etc.)
                require attested documents for work, visa, or family
                sponsorship.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-group">
              <img src="" alt="" />
            </div>
            <div className="card-body">
              <h3>What is Apostille?</h3>
              <p>
                An Apostille is a special stamp or certificate given by a
                government office to make a document officially accepted in
                certain foreign countries. It is used instead of attestation
                when the destination country is part of the “Hague Apostille
                Convention.”
              </p>
              <h4>Why it’s needed</h4>
              <p>
                It makes the process easier and faster for using legal documents
                in countries that recognize the Apostille system.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisaWelcome;
