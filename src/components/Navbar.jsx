import React from 'react';
import '../styles/Navbar.css';
// import infinityGif from '../images/infinity-gif.gif';
import { ImPencil2 } from "react-icons/im";
import { ImSearch } from "react-icons/im";
import { ImUser } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <nav className='d-flex navbar'>
                <div className="d-flex left-container">

                    <div className="ham-burger" onClick={e => setOpenNav(!openNav)}>
                        {
                            openNav ? <RiCloseFill className='icon' /> : <RiMenu2Line className='icon' />
                        }
                    </div>

                    <span className='logo-name'><Link to="/">Infinity Blogs</Link></span>
                    {/* <img src={infinityGif} alt="" className='logo-img' /> */}
                </div>

                <div className={`mid-container ${openNav ? 'open' : ''}`}  onClick={e => setOpenNav(!openNav)}>
                    <ul className="d-flex menu">
                        <Link className="d-flex menu-item" to="/" onClick={e => setOpenNav(!openNav)}>
                            <HiHome className='icon' />
                            <span className='icon-title'>Home</span>
                        </Link>
                        <Link className="d-flex menu-item" to="/create-blog" onClick={e => setOpenNav(!openNav)}>
                            <ImPencil2 className='icon' />
                            <span className='icon-title'>Create Blog</span>
                        </Link>
                        <Link className="d-flex menu-item" to="/search" onClick={e => setOpenNav(!openNav)}>
                            <ImSearch className='icon' />
                            <span className='icon-title'>Search user</span>
                        </Link>
                        <Link className="d-flex menu-item" to="/profile" onClick={e => setOpenNav(!openNav)}>
                            <ImUser className='icon' />
                            <span className='icon-title'>My profile</span>
                        </Link>
                    </ul>
                </div>

                <div className="d-flex user-info">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVQbGLNBDlWf1LNwHcaQ4DYUkXC9IXnTr5A&usqp=CAU" alt="profile-img" className='user-img' />
                    <Link className='user-name'>Ayush</Link>
                    <button className='logout-btn'>Logout</button>
                </div>

            </nav>
        </>
    )
}

export default Navbar