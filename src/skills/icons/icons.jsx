import './icons.css'

export default function Icons ({logo, iconName, color}){
	return(<>
		<div className='icons'>
			<a className='icon-skills'>{logo}</a>
			<p className='iconName'>{iconName}</p>
		</div>
	</>)
}