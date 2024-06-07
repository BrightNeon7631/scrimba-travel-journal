import worldIcon from '../assets/images/icon-world.svg';

export default function Nav() {
    return (
        <nav>
            <div className='nav--container'>
                <img className='nav--logo' src={worldIcon}/>
                <p className='nav--title'>my travel journal.</p>
            </div>
        </nav>
    )
}