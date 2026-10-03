function Hotels({ destination }) {
  const hotels = {
    Goa: [
      {
        name: "Taj Exotica Resort",
        price: 8000,
        location: "Benaulim, Goa",
        rating: 4.7,
        type: "Luxury Resort",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        amenities: ["Pool", "Spa", "Beach Access"],
      },
      {
        name: "Goa Marriott Resort",
        price: 7000,
        location: "Miramar, Goa",
        rating: 4.6,
        type: "Luxury Hotel",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        amenities: ["Pool", "Restaurant", "Wi-Fi"],
      },
      {
        name: "Radisson Goa",
        price: 5500,
        location: "Candolim, Goa",
        rating: 4.4,
        type: "Beach Hotel",
        image:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        amenities: ["Beach Access", "Pool", "Breakfast"],
      },
    ],

    Mahabaleshwar: [
      {
        name: "Le Méridien Mahabaleshwar",
        price: 6500,
        location: "Mahabaleshwar, Maharashtra",
        rating: 4.6,
        type: "Luxury Resort",
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
        amenities: ["Pool", "Spa", "Mountain View"],
      },
      {
        name: "Brightland Resort",
        price: 4500,
        location: "Mahabaleshwar, Maharashtra",
        rating: 4.3,
        type: "Resort",
        image:
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
        amenities: ["Pool", "Restaurant", "Parking"],
      },
      {
        name: "Ramsukh Resorts",
        price: 3500,
        location: "Mahabaleshwar, Maharashtra",
        rating: 4.2,
        type: "Nature Resort",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        amenities: ["Garden", "Restaurant", "Wi-Fi"],
      },
    ],

    Lonavala: [
      {
        name: "Fariyas Resort",
        price: 6000,
        location: "Lonavala, Maharashtra",
        rating: 4.5,
        type: "Luxury Resort",
        image:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        amenities: ["Water Park", "Pool", "Spa"],
      },
      {
        name: "Rhythm Lonavala",
        price: 5500,
        location: "Lonavala, Maharashtra",
        rating: 4.4,
        type: "Resort",
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd",
        amenities: ["Pool", "Restaurant", "Gym"],
      },
      {
        name: "Meritas Picaddle Resort",
        price: 4000,
        location: "Lonavala, Maharashtra",
        rating: 4.2,
        type: "Family Resort",
        image:
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
        amenities: ["Family Rooms", "Pool", "Restaurant"],
      },
    ],

    Mumbai: [
      {
        name: "Taj Mahal Palace",
        price: 15000,
        location: "Colaba, Mumbai",
        rating: 4.8,
        type: "Luxury Hotel",
        image:
          "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
        amenities: ["Sea View", "Spa", "Fine Dining"],
      },
      {
        name: "Trident Nariman Point",
        price: 10000,
        location: "Nariman Point, Mumbai",
        rating: 4.6,
        type: "Luxury Hotel",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        amenities: ["Sea View", "Pool", "Restaurant"],
      },
      {
        name: "ITC Grand Central",
        price: 8000,
        location: "Parel, Mumbai",
        rating: 4.5,
        type: "Luxury Hotel",
        image:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        amenities: ["Gym", "Spa", "Restaurant"],
      },
    ],

    Ratnagiri: [
      {
        name: "Kohinoor Samudra Beach Resort",
        price: 4000,
        location: "Bhatye, Ratnagiri",
        rating: 4.2,
        type: "Beach Resort",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        amenities: ["Beach Access", "Pool", "Restaurant"],
      },
      {
        name: "Barve's Holiday Home",
        price: 2500,
        location: "Ratnagiri, Maharashtra",
        rating: 4.1,
        type: "Holiday Home",
        image:
          "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
        amenities: ["Garden", "Parking", "Wi-Fi"],
      },
      {
        name: "Hotel Sangam Regency",
        price: 2000,
        location: "Ratnagiri, Maharashtra",
        rating: 4.0,
        type: "Hotel",
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        amenities: ["Restaurant", "Wi-Fi", "Parking"],
      },
    ],
  };

  const selectedHotels = hotels[destination];

  const viewHotel = (hotel) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      hotel.name + " " + hotel.location
    )}`;

    window.open(searchUrl, "_blank");
  };

  return (
    <section id="hotels" className="hotels-section">

      {/* Banner */}
      <div className="hotels-banner">
        <div className="hotels-banner-overlay">
          <span className="hotels-small-title">
            STAY • RELAX • EXPLORE
          </span>

          <h2>Find Your Perfect Stay</h2>

          <p>
            Comfortable stays and beautiful hotels for your journey
          </p>
        </div>
      </div>

      <div className="hotels-content">

        {!destination && (
          <div className="hotel-empty">
            <div className="hotel-empty-icon">🏨</div>

            <h3>Ready to find your stay?</h3>

            <p>
              Select a destination to explore recommended hotels.
            </p>
          </div>
        )}

        {selectedHotels && (
          <>
            <div className="hotels-heading">
              <span>RECOMMENDED FOR YOU</span>

              <h2>
                Best stays in{" "}
                <strong>{destination}</strong>
              </h2>

              <p>
                Handpicked accommodation options for your trip
              </p>
            </div>

            <div className="hotel-grid">
              {selectedHotels.map((hotel) => (
                <div className="hotel-card" key={hotel.name}>

                  {/* Hotel Image */}
                  <div className="hotel-image-wrapper">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="hotel-image"
                    />

                    <div className="hotel-type">
                      {hotel.type}
                    </div>

                    <div className="hotel-rating">
                      <span>★</span>
                      {hotel.rating}
                    </div>
                  </div>

                  {/* Hotel Details */}
                  <div className="hotel-details">

                    <h3>{hotel.name}</h3>

                    <p className="hotel-location">
                      📍 {hotel.location}
                    </p>

                    <div className="hotel-amenities">
                      {hotel.amenities.map((amenity) => (
                        <span key={amenity}>
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="hotel-bottom">

                      <div className="hotel-price">
                        <span>Starting from</span>

                        <strong>
                          ₹{hotel.price.toLocaleString("en-IN")}
                        </strong>

                        <small>/ night</small>
                      </div>

                      <button
                        className="hotel-button"
                        onClick={() => viewHotel(hotel)}
                      >
                        View Hotel
                        <span>→</span>
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
}

export default Hotels;