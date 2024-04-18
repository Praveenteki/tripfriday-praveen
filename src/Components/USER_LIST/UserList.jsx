import React, {useState,useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import MouseOverPopover from './UsernamePopUp';
import './userListStyles.css'

const User = () => {
    const [usersData, setUsersData] = useState([]);

    const userList = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log("res", res.data)
            setUsersData(res.data);
            
        })
    }
   
    useEffect(()=>{
        userList()
    }, []);

    const navigate = useNavigate();

    const handleUserDetails = (id) => {
        const userData = usersData.find((user)=>user.id===id)   
        navigate("/userProfile/"+userData.id, {state:{userData: {id:userData.id, name:userData.name, email:userData.email, phone:userData.phone, website:userData.website}}});
    }
  return (
    <div>
      <h4 className='userList_Headers'>List Of Users</h4>
      <Container maxWidth="md"  className='userList_container' >
        {usersData.map((item) => {
    return (
        <>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>

         <ListItem alignItems="flex-center">
         <ListItemAvatar>
          <Avatar alt="" src="" />
        </ListItemAvatar>
        
        <div>
        <MouseOverPopover item={item} handleUserDetails={handleUserDetails} />
        </div>
      
      </ListItem>
      </List>
      <Divider />
        </>
        
    )
    })}
      </Container>
 
    </div>
  )
}

export default User