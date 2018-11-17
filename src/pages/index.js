import React from 'react';

import Layout from '../components/layout';
import Newsletter from '../components/newsletter';
import Issues from '../components/Issues';
import Footer from '../components/footer';

const IndexPage = () => (
	<Layout>
		<div className="grid">
			<Newsletter />
			<Issues />
		</div>
		<Footer />
	</Layout>
);

export default IndexPage;
