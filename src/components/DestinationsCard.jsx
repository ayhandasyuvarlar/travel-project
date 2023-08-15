import '../scss/destinations.scss'
import navigation from '../assets/navigation.svg'

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function DestinationsCard({ picture, country, city, price, days }) {
    return (
        <aside className='destinations-card'>
            <img src={picture} alt="" />
            <div className='destinations-card-body'>
                <div className='destinations-card-body-typography'>
                    <p className='destinations-card-body-country'> {country} {city}</p>
                    <div className='destinations-card-body-price'>{price} $</div>
                </div>
                <div className='destinations-card-body-navigation'>
                    <img src={navigation} alt="" />
                    <p className='destinations-card-body-navigation-content'>{days}  Days Trip </p>
                </div>
            </div>
        </aside>
    )
}
