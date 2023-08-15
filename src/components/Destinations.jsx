import { useDestinations } from "../context/destinations"
import '../scss/destinations.scss'
import DestinationsCard from "./DestinationsCard"

export default function Destinations() {
  // eslint-disable-next-line no-unused-vars
  const getDestinationsData = useDestinations()
  return (
    <section className="destinations-container">
      <div className="destinations-container-head">
        <p className="destinations-container-context">Top Selling</p>
        <h1 className="destinations-container-typography">Top Destinations</h1>
      </div>
      <div className="destinations-container-list">
        {getDestinationsData.map((item, key) => (
          <DestinationsCard key={key} {...item} />
        ))}
      </div>
    </section>
  )
}
