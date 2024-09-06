import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetail = () => {
  const { userid } = useParams();

  const [userData, userDatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/user/" + userid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        userDatachange(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
        <div className="card" style={{"textAlign":"left"}}>
            <div className="card-title">
                <h2>User Detail</h2>
            </div>
            <div className="card-body"></div>

            {userData && 
                <div>        
                    <h2>The User Name is : <b>{userData.name}</b> ({userData.id})</h2>
                    <h3>Contact Detail</h3>
                    <h5>Email is : {userData.email}</h5>
                    <h5>Phone No. : {userData.phone}</h5>
                    <Link className='btn btn-danger' to="/"> Back to Listing</Link>
                </div>
            }
        </div>
        
    </div>
  );
};

export default UserDetail;
