import React from 'react'

import './widgets.css'

const Widgets = () => {
  return (
    <div className='widgets' >
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=340px&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        width="340px" 
        height="100%" 
        style={{border:"none", overflow:"hiddden"}} 
        scrolling="no" 
        frameborder="0"
        allowTransparency="true"
        allow='encrypted-media'
></iframe>
    </div>
  )
}

export default Widgets