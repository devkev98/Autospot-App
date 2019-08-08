import React from 'react';
import ReactDOM from 'react-dom';
import './BottomNav.css';
//Icons
import icon1 from './bottom-match.svg';
import icon2 from './bottom-profile.svg';
import icon3 from './bottom-save.svg';
import icon4 from './bottom-messages.svg';
import icon5 from './bottom-settings.svg';

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