import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import ViewPhotos from "./PhotoView";

export const UserAlbums = () => {
  const [album, setAlbums] = useState([]);

  const albums = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?_limit=10")
      .then((res) => {
        console.log("res", res.data);
        setAlbums(res.data);
      });
  };

  useEffect(() => {
    albums();
  }, []);

  return (
    <div className="userAlbum"> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <span>User Album</span> 
        </AccordionSummary>
        <AccordionDetails>
          {album.map((item) => {
            return (
              <ViewPhotos item={item}/>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserAlbums;
