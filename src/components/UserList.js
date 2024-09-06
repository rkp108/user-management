import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner, Alert } from "react-bootstrap"; // Import Alert from react-bootstrap

const UserList = () => {
  const [userData, userDatachange] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/user/detail/" + id);
  };

  const LoadEdit = (id) => {
    navigate("/user/edit/" + id);
  };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/user/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
          setError("Failed to remove user. Please try again later.");
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch user data.");
        }
        return res.json();
      })
      .then((res) => {
        userDatachange(res);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        console.log(err.message);
        setError("Failed to fetch user data. Please try again later."); // Set error message
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg rounded-3">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center">User List</h2>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-end mb-3">
            <Link to="user/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>

          {error && (
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          )}

          {loading ? (
            // Show spinner while loading
            <div className="d-flex justify-content-center my-5">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover table-striped table-bordered">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    userData.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => LoadEdit(item.id)}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm me-2"
                            onClick={() => Removefunction(item.id)}
                          >
                            Remove
                          </button>
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => LoadDetail(item.id)}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserList;
