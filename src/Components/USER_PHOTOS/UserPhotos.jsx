import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./userAlbumStyles.css";
import { Typography } from "@mui/material";

export const UserPhotos = () => {
  const [photos, setPhotos] = useState([]);

  const photo = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => {
        console.log("res", res.data);
        setPhotos(res.data);
      });
  };

  useEffect(() => {
    photo();
  }, []);

  return (
    <div className="card">
      {photos.map((item) => {
        return (
          <>
            <div className="card-1">
              <ImageList>
                <ImageListItem key={item.img}>
                  <img src={item.url} alt={item.title} loading="lazy" />
                  <Typography>{item.title}</Typography>
                </ImageListItem>
              </ImageList>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserPhotos;
