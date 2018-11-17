import React from 'react';

const Newsletter = ({ className = '' }) => {
	return (
		<div className={`newsletter ${className}`}>
			<h2>subscribe to our weekly newsletter</h2>
			<form action="//tips.us15.list-manage.com/subscribe/post?u=05ad32d0bc2eec161ad0f998b&amp;id=1b19be63b3" method="post" target="_blank">
				<input className="email-address" name="EMAIL" type="email" id="mce-EMAIL" placeholder="Your Email Address" />
				<div style={{ position: 'absolute', left: '-5000px' }}>
					<input type="text" name="b_05ad32d0bc2eec161ad0f998b_1b19be63b3" tabIndex="-1" />
				</div>
				<input className="submit-btn" id="mc-embedded-subscribe" type="submit" value="Submit" />
			</form>
			<p className="newsletter__count">Join 450+ other subscribers today. No spams</p>

			<span className="newsletter__info">Read about latest PWA's, Browser updates, new API's and its improvements in your inbox.</span>
		</div>
	);
};

export default Newsletter;
