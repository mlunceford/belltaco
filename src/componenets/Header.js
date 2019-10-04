import React from 'react'
import {Link} from 'react-router-dom'



function Header() {
    return(
        <div className="header">
            <div className="logo-box">
                <img className='logo' src="https://www.tacobell.com/medias/Taco-Bell-Logo-Bell-Only2.svg?context=bWFzdGVyfGltYWdlc3wyNTk0fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxNi9oM2YvODgyNTMyNjE3NDIzOC5zdmd8MTg2NWZhODE0YTA1ZWNiZWMyMzc5YmQ3MDQzN2U1OTJjYmUwMzFhNTAzMGRhNWNjODFkMGIyOTE1OTJmZTE0MQ" alt="logo"/>
                <div className="title btn"><Link to='/'>TACO BELL</Link></div>
            </div>
            <div className="tacoCart btn"><Link to='/tacocart'></Link>TACO CART</div>
            <div className="secretButton btn">SECRET MENU</div>
        </div>
    )
}

export default Header;