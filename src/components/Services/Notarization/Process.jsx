import React from "react";
import { Container } from "@mui/material";

const users = [
  { id: 1, name: "John", age: 28, city: "New York" },
  { id: 2, name: "Jane", age: 24, city: "Los Angeles" },
  { id: 3, name: "Bob", age: 30, city: "Chicago" },
];

const Process = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Documentation</label>
          <h1>
            Canadian Issued <span className="gradient-text">Documents</span>
          </h1>
          <p>
            Here’s a quick glance at the ease and process in getting your
            Canadian Issued Documents Apostille, notarized authenticated &
            verified.
          </p>
          <p>-Break down Steps & Cost-</p>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default Process;
