import React from 'react';

import { Link } from 'gatsby';

const Menu = () => {
	return (
		<ul className="menu">
			<li>
				<Link to="/">newsletter</Link>
			</li>
			<li>
				<Link to="/archives">archives</Link>
			</li>
		</ul>
	);
};

export default Menu;
