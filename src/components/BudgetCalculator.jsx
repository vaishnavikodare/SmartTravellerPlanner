import React, { useState } from "react";

function BudgetCalculator() {
  const [days, setDays] = useState(1);
  const [travellers, setTravellers] = useState(1);
  const [hotel, setHotel] = useState(3000);
  const [food, setFood] = useState(1000);
  const [transport, setTransport] = useState(2000);
  const [activities, setActivities] = useState(1000);
  const [showMagic, setShowMagic] = useState(false);

  const totalHotel = Number(days) * Number(hotel);

  const totalFood =
    Number(days) * Number(travellers) * Number(food);

  const totalTransport = Number(transport);

  const totalActivities =
    Number(days) * Number(travellers) * Number(activities);

  const total =
    totalHotel + totalFood + totalTransport + totalActivities;

  const handleCalculate = () => {
    if (
      Number(days) > 0 &&
      Number(travellers) > 0 &&
      Number(hotel) >= 0 &&
      Number(food) >= 0 &&
      Number(transport) >= 0 &&
      Number(activities) >= 0
    ) {
      setShowMagic(false);

      setTimeout(() => {
        setShowMagic(true);
      }, 100);
    }
  };

  return (
    <section className="budget-section">

      <style>{`
        .budget-section {
          padding: 70px 20px;
          background: #f7f9fc;
          display: flex;
          justify-content: center;
        }

        .budget-card {
          width: 100%;
          max-width: 900px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid #e4e9f0;
          border-radius: 24px;
          padding: 38px 42px;
          box-shadow: 0 15px 45px rgba(31, 41, 55, 0.10);
          position: relative;
          overflow: hidden;
        }

        .budget-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(255, 190, 210, 0.16);
          top: -80px;
          right: -60px;
        }

        .budget-card::after {
          content: "";
          position: absolute;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(190, 220, 255, 0.18);
          bottom: -70px;
          left: -50px;
        }

        .budget-header {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .budget-label {
          display: inline-block;
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 600;
          color: #7c3aed;
          margin-bottom: 8px;
        }

        .budget-title {
          font-size: 28px;
          margin: 0;
          color: #172033;
          font-weight: 700;
        }

        .budget-subtitle {
          margin: 10px auto 28px;
          color: #718096;
          font-size: 15px;
          max-width: 600px;
          line-height: 1.6;
        }

        .budget-divider {
          height: 1px;
          background: #e9edf3;
          margin-bottom: 28px;
        }

        .budget-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
          position: relative;
          z-index: 1;
        }

        .budget-field {
          background: #fbfcfe;
          border: 1px solid #e1e7ef;
          border-radius: 16px;
          padding: 18px;
          transition: all 0.25s ease;
        }

        .budget-field:hover {
          transform: translateY(-2px);
          border-color: #c9b5f7;
          box-shadow: 0 8px 22px rgba(124, 58, 237, 0.08);
        }

        .budget-field label {
          display: block;
          font-size: 15px;
          font-weight: 650;
          color: #263247;
          margin-bottom: 10px;
        }

        .budget-input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #d8e0ea;
          border-radius: 11px;
          padding: 12px 14px;
          font-size: 15px;
          outline: none;
          background: white;
          color: #1f2937;
          transition: border 0.2s ease, box-shadow 0.2s ease;
        }

        .budget-input:focus {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
        }

        .budget-hint {
          margin-top: 7px;
          font-size: 12px;
          color: #94a3b8;
        }

        .budget-button-wrapper {
          text-align: center;
          margin-top: 30px;
          position: relative;
          z-index: 1;
        }

        .budget-button {
          border: none;
          border-radius: 13px;
          padding: 13px 28px;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: white;
          font-size: 15px;
          font-weight: 650;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
          transition: all 0.25s ease;
        }

        .budget-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 25px rgba(124, 58, 237, 0.32);
        }

        .budget-result {
          margin-top: 30px;
          background: linear-gradient(135deg, #f7f1ff, #fff7fb);
          border: 1px solid #e8dafa;
          border-radius: 18px;
          padding: 22px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .result-small {
          color: #7c3aed;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .result-total {
          font-size: 34px;
          font-weight: 750;
          color: #1f2937;
          margin: 7px 0;
        }

        .result-text {
          color: #718096;
          font-size: 13px;
        }

        .magic-area {
          margin-top: 25px;
          text-align: center;
          position: relative;
          z-index: 2;
          animation: magicAppear 0.7s ease forwards;
        }

        .magic-heart {
          font-size: 54px;
          display: inline-block;
          animation: heartBloom 1.2s ease-in-out;
          filter: drop-shadow(0 8px 12px rgba(236, 72, 153, 0.25));
        }

        .magic-title {
          margin: 6px 0 4px;
          font-size: 18px;
          color: #7c3aed;
          font-weight: 700;
        }

        .magic-text {
          margin: 0;
          font-size: 13px;
          color: #718096;
        }

        .sparkle {
          position: absolute;
          font-size: 17px;
          animation: sparkleFloat 1.5s ease-out forwards;
          opacity: 0;
        }

        .sparkle.one {
          left: 35%;
          top: 5px;
          animation-delay: 0.1s;
        }

        .sparkle.two {
          right: 35%;
          top: 12px;
          animation-delay: 0.25s;
        }

        .sparkle.three {
          left: 43%;
          top: 40px;
          animation-delay: 0.4s;
        }

        @keyframes heartBloom {
          0% {
            transform: scale(0.2);
            opacity: 0;
          }

          45% {
            transform: scale(1.35);
            opacity: 1;
          }

          70% {
            transform: scale(0.92);
          }

          100% {
            transform: scale(1);
          }
        }

        @keyframes magicAppear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkleFloat {
          0% {
            opacity: 0;
            transform: translateY(15px) scale(0.5);
          }

          40% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateY(-35px) scale(1.1);
          }
        }

        @media (max-width: 700px) {
          .budget-section {
            padding: 45px 15px;
          }

          .budget-card {
            padding: 28px 20px;
          }

          .budget-title {
            font-size: 24px;
          }

          .budget-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .result-total {
            font-size: 29px;
          }
        }
      `}</style>

      <div className="budget-card">

        <div className="budget-header">
          <div className="budget-label">💰 TRIP BUDGET</div>

          <h2 className="budget-title">
            Plan your budget with ease ✨
          </h2>

          <p className="budget-subtitle">
            Adjust your travel expenses and discover an estimated
            budget for your perfect trip. 🧳🌍
          </p>
        </div>

        <div className="budget-divider"></div>

        <div className="budget-grid">

          <div className="budget-field">
            <label>📅 Number of Days</label>

            <input
              className="budget-input"
              type="number"
              min="1"
              value={days}
              onChange={(e) => {
                setDays(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              How long will your adventure last?
            </div>
          </div>

          <div className="budget-field">
            <label>👥 Travellers</label>

            <input
              className="budget-input"
              type="number"
              min="1"
              value={travellers}
              onChange={(e) => {
                setTravellers(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              Number of people travelling
            </div>
          </div>

          <div className="budget-field">
            <label>🏨 Hotel Cost / Night</label>

            <input
              className="budget-input"
              type="number"
              min="0"
              value={hotel}
              onChange={(e) => {
                setHotel(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              Estimated accommodation cost
            </div>
          </div>

          <div className="budget-field">
            <label>🍽️ Food / Person / Day</label>

            <input
              className="budget-input"
              type="number"
              min="0"
              value={food}
              onChange={(e) => {
                setFood(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              Meals and food expenses
            </div>
          </div>

          <div className="budget-field">
            <label>🚗 Transport Cost</label>

            <input
              className="budget-input"
              type="number"
              min="0"
              value={transport}
              onChange={(e) => {
                setTransport(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              Travel and transportation
            </div>
          </div>

          <div className="budget-field">
            <label>🎯 Activities / Person</label>

            <input
              className="budget-input"
              type="number"
              min="0"
              value={activities}
              onChange={(e) => {
                setActivities(e.target.value);
                setShowMagic(false);
              }}
            />

            <div className="budget-hint">
              Activities and experiences
            </div>
          </div>

        </div>

        <div className="budget-button-wrapper">
          <button
            className="budget-button"
            onClick={handleCalculate}
          >
            ✨ Calculate My Trip Budget
          </button>
        </div>

        <div className="budget-result">
          <div className="result-small">
            ESTIMATED TRIP COST
          </div>

          <div className="result-total">
            ₹{total.toLocaleString("en-IN")}
          </div>

          <div className="result-text">
            Based on your days, travellers and selected expenses
          </div>
        </div>

        {showMagic && (
          <div className="magic-area">

            <span className="sparkle one">✨</span>
            <span className="sparkle two">💫</span>
            <span className="sparkle three">✨</span>

            <div className="magic-heart">
              💖
            </div>

            <h3 className="magic-title">
              Your trip is taking shape! ✨
            </h3>

            <p className="magic-text">
              A little planning today, a beautiful adventure tomorrow. 🌍
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default BudgetCalculator;