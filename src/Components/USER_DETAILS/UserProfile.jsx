import React from "react";
import { useLocation, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { UserAlbums } from "../USER_PHOTOS/UserAlbum";
import UserPosts from "../USER_POSTS/UserPosts";
import "./userProfilestyles.css";
import Button from "@mui/material/Button";

const UserProfile = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <Paper elevation={3}>
          <div className="userProfile_paper">
            <h3 className="userProfile_Headers">User Details</h3>
            <Divider />
            <ul>
              <p>
                <span>Name:</span> {location.state.userData.name}
              </p>
              <p>
                <span>Email:</span> {location.state.userData.email}
              </p>
              <p>
                <span>Phone:</span> {location.state.userData.phone}
              </p>
              <p>
                <span>website:</span> {location.state.userData.website}
              </p>
            </ul>
          </div>
        </Paper>
        <UserPosts />
        <UserAlbums />
      </Container>
      <br />
      <Button variant="contained">
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none", margin: "3px" }}
        >
          Back
        </Link>
      </Button>
    </>
  );
};

export default UserProfile;
