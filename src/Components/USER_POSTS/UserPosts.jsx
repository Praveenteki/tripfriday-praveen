import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Post from "./CommentSection";
import Paper from "@mui/material/Paper";

import "./userpostStyles.css";

export const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchString = e.target.value;
    if (searchString.length > 0) {
      const searchData = posts.filter((eachTitle) =>
        eachTitle.title.toLowerCase().includes(searchString)
      );
      setPosts(searchData);
    } else {
      setPosts(filteredData);
    }
    setQuery(searchString);
  };

  const postsList = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => {
        console.log("res", res.data);
        setPosts(res.data);
        setFilteredData(res.data);
      });
  };

  useEffect(() => {
    postsList();
  }, []);

  return (
    <div className="userpost_accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <span>User Posts</span>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            className="searchbar"
            value={query}
            onChange={handleSearch}
            placeholder="Search Posts"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          {posts.map((post) => {
            return (
              <Paper>
                {" "}
                <Post post={post} />
              </Paper>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default UserPosts;
