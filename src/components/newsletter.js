import React from 'react';

const Newsletter = () => {
	return (
		<div className="newsletter">
			<form action="//tips.us15.list-manage.com/subscribe/post?u=05ad32d0bc2eec161ad0f998b&amp;id=1b19be63b3" method="post" target="_blank">
				<input className="email-address" name="EMAIL" type="email" id="mce-EMAIL" placeholder="Your Email Address" />
				<div>
					<input type="text" name="b_05ad32d0bc2eec161ad0f998b_1b19be63b3" tabIndex="-1" />
				</div>
				<input className="submit-btn" id="mc-embedded-subscribe" type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Newsletter;
