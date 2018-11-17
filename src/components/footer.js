import React from 'react';
import { Link } from 'gatsby';

import Newsletter from './newsletter';

const Footer = () => (
	<footer>
		<div className="grid">
			<Newsletter />
			<div className="footer__content">
				<>
					<b>
						&copy; {new Date().getFullYear()} -{' '}
						<a target="_blank" href="https://github.com/code-kotis" rel="noopener noreferrer">
							Code Kotis
						</a>
					</b>
				</>
				<div className="footer__curator">
					Curator's -
					<a target="_blank" href="https://github.com/gokulkrishh" rel="noopener noreferrer">
						<b>Gokul</b>
					</a>
					&middot;
					<a target="_blank" href="https://github.com/hemanth" rel="noopener noreferrer">
						<b>Hemanth</b>
					</a>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
