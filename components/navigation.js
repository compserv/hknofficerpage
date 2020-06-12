export default function Navigation() {
	return (
		<nav className="db dt-l w-100 border-box ph5-l">
			<a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l pv3" href="#" title="Home">
				<img src="hkn-bear.svg" className="dib w2 h2 br-100 bid v-mid" alt="HKN" />
				<div className="dib v-mid"><div className="fw8">Eta Kappa Nu</div> UC Berkeley</div>
			</a>
			<div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
				<a className="link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l" href="#" title="Student Services">Student Services</a>
				<a className="link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l" href="#" title="Industry">Industry</a>
				<a className="link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l" href="#" title="Outreach">Outreach</a>
				<a className="link dim dark-gray pv3 f6 f5-l dib mr3 mr4-l" href="#" title="Events">Events</a>
				<a className="link dim dark-gray pv3 f6 f5-l dib" href="#" title="About">About</a>
			</div>
		</nav>
	)

}