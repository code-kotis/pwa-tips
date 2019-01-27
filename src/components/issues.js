import React from 'react'

const Issues = () => {
	return (
		<div className="issues">
			<div className="issues__list">
				<div className="latest">
					<h3>Latest Issue</h3>
					<span className="issues__no">Issue # 14 /January 24, 2019</span>
					<div className="issue">
						
					</div>
				</div>
				<div className="past">
					<h3>Past Issues</h3>
				</div>
			</div>

			{/* <div className="issues__footer">
				<span>&copy; {new Date().getFullYear()}</span> · 😼 Curators -{' '}
				<a target="_blank" href="https://github.com/gokulkrishh">
					Gokul
				</a>{' '}
				·{' '}
				<a target="_blank" href="https://github.com/hemanth">
					Hemanth
				</a>
			</div> */}
		</div>
	)
}

export default Issues
