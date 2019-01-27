import React from 'react'

import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import Issues from '../components/Issues'
import SEO from '../components/seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`this week in web`]} />
		<div className="content">
			<div className="content__left">
				<Newsletter />
			</div>
			<div className="content__right">
				<Issues />
			</div>
		</div>
	</Layout>
)

export default IndexPage
