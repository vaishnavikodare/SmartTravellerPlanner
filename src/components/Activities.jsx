function Activities({ destination }) {
  const activities = {
    Goa: [
      {
        name: "Beach Visit",
        description:
          "Relax on the beach, enjoy the sea views and take beautiful photos.",
        cost: "₹0 - ₹500",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Water Sports",
        description:
          "Enjoy exciting activities such as parasailing and water rides.",
        cost: "₹800 - ₹2,500",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Fort Aguada",
        description:
          "Explore the historic fort and enjoy beautiful coastal views.",
        cost: "₹50 - ₹200",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Goan Food Tour",
        description:
          "Taste popular Goan dishes and explore local food spots.",
        cost: "₹500 - ₹1,500",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
      },
    ],

    Mahabaleshwar: [
      {
        name: "Visit Viewpoints",
        description:
          "Explore famous viewpoints and enjoy beautiful mountain scenery.",
        cost: "₹0 - ₹200",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Strawberry Farm",
        description:
          "Visit a strawberry farm and enjoy fresh local strawberries.",
        cost: "₹200 - ₹500",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Venna Lake",
        description:
          "Enjoy boating and relax around the beautiful lake.",
        cost: "₹100 - ₹500",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Pratapgad Fort",
        description:
          "Explore the historic fort and learn about its history.",
        cost: "₹50 - ₹300",
        duration: "3 - 4 hours",
        image:
          "https://images.unsplash.com/photo-1597149950737-4f8e2f3f2a4f?auto=format&fit=crop&w=900&q=80",
      },
    ],

    Lonavala: [
      {
        name: "Bhushi Dam",
        description:
          "Enjoy the scenic surroundings and monsoon atmosphere.",
        cost: "₹0 - ₹200",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Rajmachi Fort",
        description:
          "Explore the historic fort and enjoy mountain views.",
        cost: "₹100 - ₹500",
        duration: "4 - 6 hours",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Karla Caves",
        description:
          "Explore ancient Buddhist caves and historical architecture.",
        cost: "₹50 - ₹200",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Nature Walk",
        description:
          "Enjoy a peaceful walk through the beautiful natural surroundings.",
        cost: "₹0 - ₹300",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
      },
    ],

    Mumbai: [
      {
        name: "Gateway of India",
        description:
          "Visit one of Mumbai's most famous landmarks.",
        cost: "₹0 - ₹500",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Marine Drive",
        description:
          "Enjoy a relaxing walk and beautiful views of the Arabian Sea.",
        cost: "₹0",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Street Food Tour",
        description:
          "Try popular Mumbai street food and local snacks.",
        cost: "₹300 - ₹1,000",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "City Sightseeing",
        description:
          "Explore popular landmarks and attractions around Mumbai.",
        cost: "₹500 - ₹2,000",
        duration: "4 - 6 hours",
        image:
          "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
      },
    ],

    Ratnagiri: [
      {
        name: "Beach Visit",
        description:
          "Relax by the sea and enjoy the beautiful Konkan coastline.",
        cost: "₹0 - ₹300",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Ratnadurg Fort",
        description:
          "Explore the historic fort and enjoy coastal views.",
        cost: "₹0 - ₹200",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Thibaw Palace",
        description:
          "Visit the historic palace and learn about its history.",
        cost: "₹20 - ₹100",
        duration: "1 - 2 hours",
        image:
          "https://images.unsplash.com/photo-1597149950737-4f8e2f3f2a4f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Konkan Food Tour",
        description:
          "Taste delicious traditional Konkan food and local dishes.",
        cost: "₹300 - ₹1,000",
        duration: "2 - 3 hours",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
      },
    ],
  }

  const selectedActivities = activities[destination]

  const exploreActivity = (activity) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      activity.name + " " + destination
    )}`

    window.open(searchUrl, "_blank")
  }

  return (
    <section id="activities" className="activities">

      {/* Section Heading */}

      <div className="activities-heading">

        <span className="activities-eyebrow">
          ✦ EXPLORE & EXPERIENCE ✦
        </span>

        <h2>
          Recommended Activities
        </h2>

        <p>
          Make your trip memorable with handpicked
          experiences, local attractions and exciting
          things to do.
        </p>

      </div>

      {!destination && (
        <div className="activities-empty">
          <span>🗺️</span>

          <p>
            Select a destination to discover
            recommended activities.
          </p>
        </div>
      )}

      {selectedActivities && (
        <div className="activities-container">

          {selectedActivities.map((activity) => (

            <div
              className="activity-card"
              key={activity.name}
            >

              {/* Small Activity Image */}

              <div className="activity-image-wrapper">

                <img
                  src={activity.image}
                  alt={activity.name}
                  className="activity-image"
                />

                <span className="activity-photo-label">
                  EXPERIENCE
                </span>

              </div>

              {/* Card Content */}

              <div className="activity-content">

                <h3>
                  {activity.name}
                </h3>

                <p className="activity-description">
                  {activity.description}
                </p>

                {/* Information */}

                <div className="activity-info">

                  <div className="activity-info-item">
                    <span>💰</span>

                    <div>
                      <small>Estimated Cost</small>

                      <strong>
                        {activity.cost}
                      </strong>
                    </div>
                  </div>

                  <div className="activity-info-item">
                    <span>⏱️</span>

                    <div>
                      <small>Duration</small>

                      <strong>
                        {activity.duration}
                      </strong>
                    </div>
                  </div>

                </div>

                {/* Explore Button */}

                <button
                  className="activity-explore-button"
                  onClick={() =>
                    exploreActivity(activity)
                  }
                >
                  Explore Experience
                  <span>→</span>
                </button>

              </div>

            </div>

          ))}

        </div>
      )}

    </section>
  )
}

export default Activities