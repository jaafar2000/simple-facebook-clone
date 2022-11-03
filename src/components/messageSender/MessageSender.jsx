import { Avatar } from '@mui/material'
import React, { useContext, useState } from 'react'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { myContext } from '../../context/MyContext';
import db  from "../../firebase"
import { addDoc, collection ,serverTimestamp } from 'firebase/firestore';
import './ms.css'
const MessageSender = () => {
    const {user} = useContext(myContext)
    const [input , setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        const colRef = collection(db, "Posts" )
        addDoc(colRef , {
            timestamp: serverTimestamp(),
            message: input,
            image: imageUrl,
            profilepic: user?.photoURL,
            username: user?.displayName
        })

        setInput('');
        setImageUrl("");
    }
  return (

    <div className='messageSender' >
            <div className='messageSender__top' >
                <Avatar  src={user.photoURL}  />
                <form>
                    <input  
                        className='messageSender__input'  
                        placeholder={`whats in your mind?  ${user?.displayName} `}
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        />
                    <input    
                        placeholder='image URL (Optional)'
                        value={imageUrl}
                        onChange={e=>setImageUrl(e.target.value)}    
                        />
                    <button onClick={handleSubmit}   type="submit" >hidden submit</button>
                </form>
            </div>
            <div className='messageSender__bottom' >
                <div className='messageSender__Optiona' >
                    <VideocamIcon style ={{color :'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__Optiona' >
                    <PhotoLibraryIcon style ={{color :'green'}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className='messageSender__Optiona' >
                    <InsertEmoticonIcon style ={{color :'Orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
    </div>
  )
}

export default MessageSender