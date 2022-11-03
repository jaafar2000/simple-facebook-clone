import React, { useContext } from 'react'
import SidebarRow from '../sidebarRow/SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./sidebar.css"
import { myContext } from '../../context/MyContext';
const Sidebar = () => {
  const {user} = useContext(myContext)
  return (
    <div className='sidebar'>
        <SidebarRow title={user?.displayName}   src={user?.photoURL} />

        <SidebarRow  Icon={LocalHospitalIcon} title='Covid-19 Information Center'  />

        <SidebarRow  Icon={EmojiFlagsIcon} title='Pages'   />
        <SidebarRow  Icon={PeopleOutlineIcon} title='Friends'  />
        <SidebarRow  Icon={ChatBubbleOutlineIcon} title='Messenger'  />
        <SidebarRow  Icon={StorefrontIcon} title='MarketPlace'  />
        <SidebarRow Icon={VideoLibraryIcon}  title='Videos'  />
        <SidebarRow Icon={KeyboardArrowDownIcon}  title='Marketpalce'  />
    </div>
  )
}

export default Sidebar