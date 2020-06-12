import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

function Layout({ children }) {
	return (
		<div>
			<Head>
				<link rel="icon" href="/hkn-bear.svg" />
				<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css" />
			</Head>
			<Navigation />

			<main>{children}</main>

			<Footer />
		</div>
	)
}

export default Layout