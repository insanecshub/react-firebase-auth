import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");

  const history = useHistory();

  return (
    <>
      <Card className="bg-dark">
        <Card.Body>
          <h2 className="text-center mb-4 text-white">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong className="text-white">Email:</strong>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link">Log Out</Button>
      </div>
    </>
  );
}
