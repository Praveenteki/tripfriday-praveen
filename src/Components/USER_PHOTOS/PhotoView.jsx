import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import UserPhotos from "./UserPhotos";

export const ViewPhotos = (props) => {
  const [newComponet, setNewComponet] = useState(false);

  return (
    <div>
      <>
        <div>
          <ImageList>
            <ImageListItem
              key={props.item.img}
              onClick={(e) => setNewComponet(!newComponet)}
            >
              <img
                src={props.item.thumbnailUrl}
                alt={props.item.title}
                loading="lazy"
              />
            </ImageListItem>
          </ImageList>
          {newComponet && <UserPhotos />}
        </div>
      </>
    </div>
  );
};

export default ViewPhotos;
