import React from 'react';
import { Link } from 'gatsby';

import Menu from './menu';

const Header = ({ siteTitle }) => (
	<header>
		<div className="grid">
			<h1>
				<Link to="/">{siteTitle}</Link>
			</h1>
			<Menu />
		</div>
	</header>
);

export default Header;
