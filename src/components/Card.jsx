import locationLogo from '../assets/images/icon-location.svg';

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.item.img}/>
            <div className="card--info">
                <div className="card--info--location">
                    <img src={locationLogo} />
                    <p>{props.item.location}</p>
                    <a href='#'>View on Google Maps</a>
                </div>
                <h1 className='card--info--title'>{props.item.title}</h1>
                <p className='card--info--date'>{props.item.date}</p>
                <p className='card--info--description'>{props.item.description}</p>
            </div>
        </div>
    )
}