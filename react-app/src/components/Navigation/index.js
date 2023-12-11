import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from './piMart_logo.png'
import LoginSection from './loginSection';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const [showDropDown, setShowDropDown] = useState(false)

	const handleMouseEnter = () => {
        setShowDropDown(true)
    }

    const handleMouseLeave = () => {
        setShowDropDown(false)
    }
	return (
		<>
			<div className='navbar'>
				<div id='siteLogoContainer'>
					<NavLink exact to="/">
						<img id='siteLogo' src={logo} alt='page logo'></img>
					</NavLink>
				</div>
				{isLoaded && (
					<>
						<div className='navbar-right'>
							<div className='nabar-right-items'>
								<div id='signInContainer'
									onMouseEnter={handleMouseEnter}
									onMouseLeave={handleMouseLeave}
								>
									<div>
										hello, sign in
									</div>
									<div id='AcListContainer'>
										Account & Lists
										<span class="material-symbols-outlined">
											arrow_drop_down
										</span>
									</div>
									{showDropDown && (
										<LoginSection
										// user={sessionUser}
										// showDropDown={showDropDown}
										/>
									 )}
								</div>
								{/* <ProfileButton user={sessionUser} /> */}
							</div>
							<div className='nabar-right-items'>
								return's & orders
							</div>
							<div className='nabar-right-items'>
								cart
							</div>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Navigation;
