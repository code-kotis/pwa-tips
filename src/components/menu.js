import React from 'react';

import { Link } from 'gatsby';

const Menu = () => {
	return (
		<ul className="menu">
			<li>
				<Link to="/archives" activeClassName="active" title="archives">
					archives
				</Link>
			</li>
		</ul>
	);
};

export default Menu;
