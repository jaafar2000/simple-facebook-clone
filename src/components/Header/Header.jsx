import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import  { Avatar , IconButton} from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./Header.css";
import { myContext } from "../../context/MyContext";

const Header = () => {
    const {user} = useContext(myContext)
    return (
    <div className="header">

        <div className="header__left">
        <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
            alt="logo "
        />
        <div className="header__input">
            <SearchIcon />
            <input type="text"  placeholder="Search Facebook"/>
        </div>
        </div>
        <div className="header__middle">
            <div className="header__option  header__option-active"><HomeIcon/></div>
            <div className="header__option"><FlagIcon/></div>
            <div className="header__option"><SubscriptionsIcon/></div>
            <div className="header__option"><StorefrontIcon/></div>
            <div className="header__option"><SupervisedUserCircleIcon/></div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user?.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>

            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
    );
};

export default Header;
