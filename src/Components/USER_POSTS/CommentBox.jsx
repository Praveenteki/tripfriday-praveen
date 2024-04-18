import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CommentIcon from '@mui/icons-material/Comment';
import InputAdornment from "@mui/material/InputAdornment";
import SendIcon from '@mui/icons-material/Send';




export default function Comments(props) {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = () => {
    console.log("comment", comment);
    props.addPost(comment);
    setComment("");
  };
  return (
    <div className ='textfield_comment'>
      <TextField
        onChange={(e) => handleComment(e)}
        placeholder="Add Comments"
        value={comment}
        label="Comment"
        id="standard-basic" 
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              < CommentIcon/>
            </InputAdornment>
          ),}}
      />
      <Button onClick={(e) => handleSubmit()}>
      < SendIcon/>
      </Button>
    </div>
  );
}