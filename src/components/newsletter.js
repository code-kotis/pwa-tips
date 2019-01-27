import React from 'react'
import { Link } from 'gatsby'

const Newsletter = () => {
	return (
		<div className="newsletter">
			<div className="newsletter__content">
				<h1>
					<Link to="/">this week in web</Link>
				</h1>
				<h2>subscribe to our newsletter</h2>
				<form
					action="//tips.us15.list-manage.com/subscribe/post?u=05ad32d0bc2eec161ad0f998b&amp;id=1b19be63b3"
					method="post"
					target="_blank"
				>
					<input
						className="email-address"
						name="EMAIL"
						type="email"
						id="mce-EMAIL"
						placeholder="Your Email Address"
						required
					/>
					<div style={{ position: 'absolute', left: '-5000px' }}>
						<input
							type="text"
							name="b_05ad32d0bc2eec161ad0f998b_1b19be63b3"
							tabIndex="-1"
						/>
					</div>
					<input
						className="submit-btn"
						id="mc-embedded-subscribe"
						type="submit"
						value="Submit"
					/>
				</form>
				<span className="newsletter__info">
					Get latest news about{' '}
					<b>web, browsers updates, pwa's, interesting articles</b> in your
					inbox. No spams.
				</span>
				<span className="newsletter__info">
					To get featured in our newsletter{' '}
					<a href="/" id="submit">
						submit
					</a>{' '}
					here.
				</span>
			</div>
		</div>
	)
}

export default Newsletter
