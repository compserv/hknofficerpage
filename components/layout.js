import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

function Layout({ children }) {
	return (
		<div style={{"font-family": "'Source Sans Pro', sans-serif"}}>
			<Head>
				<link rel="icon" href="hkn-bear.svg" />
				<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css" />
				<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro" rel="stylesheet" />
			</Head>
			<Navigation />

			<main>{children}</main>

			<Footer />
		</div>
	)
}

export default Layout