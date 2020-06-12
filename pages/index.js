import Head from 'next/head'
import Layout from '../components/layout'
import Committee from '../components/committee'
import Members from '../data/members'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Officers | Berkeley HKN</title>
			</Head>
			<Layout>
				{Members.map(comm => <Committee key={comm.name} comm={comm} />)}
			</Layout>
		</div>
	)
}
