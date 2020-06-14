import ClassNames from 'classnames'
import Profile from '../components/profile'

function Committee(props) {
	return (
		<section className="pa4">
			<div className="b f2 tl-l tc pa2">{props.comm.name}</div>
			<div className="">
				<div className="dib-l v-top w-60-l mw7-l pa1">
					{props.comm.officers.map(officer => <Profile officer={officer}/>)}
				</div>
				<div className="w-40-l pa1 dib-l db-m dn v-top">
					<img src={"committees/"+ props.comm.name +".jpg"} className="w-100 br2" alt="Photo of Execs" />
				</div>
				
			</div>
		</section>
	)
}

export default Committee