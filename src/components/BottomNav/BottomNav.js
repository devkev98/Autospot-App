import React from 'react';
import ReactDOM from 'react-dom';
import './BottomNav.css';
//Icons
import icon1 from './bottom-match.svg';
import icon2 from './bottom-profile.svg';
import icon3 from './bottom-save.svg';
import icon4 from './bottom-messages.svg';
import icon5 from './bottom-settings.svg';
//icons white
import white1 from './bottom-match-white.svg';
import white2 from './bottom-profile-white.svg';
import white3 from './bottom-save-white.svg';
import white4 from './bottom-messages-white.svg';
import white5 from './bottom-settings-white.svg';

function BottomNav () {
  return (
    <div className="bottom-nav">
    	<div className="bottom-button">
    		<div className="center">
    			<img src={icon1} />
    			<div>Match</div>
    		</div>
    	</div>
    	<div className="bottom-button">
			<div className="center">
				<img src={icon2} />
				<div>Profile</div>
			</div>
		</div>
    	<div className="bottom-button">
			<div className="center">
				<img src={icon3} />
				<div>Saved</div>
			</div>
		</div>
    	<div className="bottom-button">
			<div className="center">
				<img src={icon4} />
				<div>Messages</div>
			</div>
		</div>
		<div className="bottom-button">
			<div className="center">
				<img src={icon5} />
				<div>Settings</div>
			</div>
		</div>
    </div>
  );
} 

export default BottomNav;