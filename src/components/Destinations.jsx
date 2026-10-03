import DestinationCard from "./DestinationCard"

function Destinations() {
  return (
    <section className="destinations-section">
      <h2>Popular Destinations</h2>

      <div className="destination-container">
        <DestinationCard
          name="Goa"
          location="India"
        />

        <DestinationCard
          name="Mahabaleshwar"
          location="Maharashtra"
        />

        <DestinationCard
          name="Lonavala"
          location="Maharashtra"
        />
      </div>
    </section>
  )
}

export default Destinations