import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Comments from "./CommentBox";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Post(props) {
  const [comments, setComments] = useState([]);

  const addPost = (comment) => {
    setComments([...comments, comment]);
  };

  const handlDelete = (comment) => {
    let cloned = [...comments];
    let index = cloned.findIndex((c) => c === comment);
    if (index !== -1) {
      cloned.splice(index, 1);
      setComments(cloned);
    }
  };

  return (
    <div>
      <>
        <Paper elevation={3} padding={"5px"}>
          <h4 className="postHeader"> {props.post.title}</h4>
          <p> {props.post.body}</p>
          {comments.length > 0 ? (
            comments.map((com) => (
              <div className="comment_section">
                <Avatar
                  alt=""
                  src=""
                  style={{ height: "20px", width: "20px", marginTop: "4px" }}
                />
                <Typography>commented :<span style={{fontSize : '15px'}}>{com}</span></Typography>
                <DeleteIcon style={{color: 'red'}}
                  onClick={() => {
                    handlDelete(com);
                  }}
                />
              </div>
            ))
          ) : (
            <></>
          )}
          <Comments addPost={addPost} />
        </Paper>
      </>
    </div>
  );
}
