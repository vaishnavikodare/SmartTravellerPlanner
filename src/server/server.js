import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Smart Traveller AI Server is running!")
})

app.post("/api/ai", (req, res) => {
  const { message } = req.body

  if (!message) {
    return res.status(400).json({
      reply: "Please enter a message."
    })
  }

  const text = message.toLowerCase().trim()

  let reply =
    "✈️ I can help you with destinations, itineraries, budgets, hotels, transport, activities, food, packing and travel tips. What would you like to know?"

  // -------------------------
  // GREETINGS
  // -------------------------

  if (
    text === "hello" ||
    text === "hi" ||
    text === "hey" ||
    text.includes("hello there")
  ) {
    reply =
      "Hi! 👋 I'm your Smart Traveller AI Assistant. How can I help you plan your trip today? ✈️🌍"
  }

  if (text.includes("good morning")) {
    reply =
      "Good morning! ☀️ Ready to plan your next trip? Tell me your destination, budget or number of days."
  }

  if (text.includes("good afternoon")) {
    reply =
      "Good afternoon! 😊 How can I help you with your travel plans today?"
  }

  if (text.includes("good evening")) {
    reply =
      "Good evening! 🌆 Where are you planning to travel?"
  }

  // -------------------------
  // THANK YOU
  // -------------------------

  if (
    text.includes("thank you") ||
    text.includes("thanks") ||
    text.includes("thank u")
  ) {
    reply =
      "You're welcome! 😊 I'm happy to help with your travel plans. ✈️"
  }

  // -------------------------
  // GOA
  // -------------------------

  if (text.includes("goa")) {
    reply =
      "🌴 Goa is a great destination for beaches, sightseeing, water activities and local food. Popular places include Baga Beach, Calangute Beach, Anjuna, Fort Aguada and Palolem."
  }

  // -------------------------
  // 3 DAY GOA
  // -------------------------

  if (
    text.includes("3 day") &&
    text.includes("goa")
  ) {
    reply =
      "🌴 Here's a simple 3-day Goa plan:\n\n" +
      "📅 Day 1: Visit Baga Beach, Calangute Beach and nearby sightseeing spots.\n\n" +
      "📅 Day 2: Explore Fort Aguada, Candolim and Anjuna Beach.\n\n" +
      "📅 Day 3: Visit Palolem or Colva Beach and enjoy a relaxed evening.\n\n" +
      "💰 For a ₹10,000 budget, choose affordable accommodation, local restaurants and public or shared transport."
  }

  // -------------------------
  // GOA ACTIVITIES
  // -------------------------

  if (
    text.includes("things to do") &&
    text.includes("goa")
  ) {
    reply =
      "🌴 Things to do in Goa:\n\n" +
      "🏖️ Visit Baga and Calangute Beach\n" +
      "🏰 Explore Fort Aguada\n" +
      "🌊 Try water activities\n" +
      "🌅 Enjoy a sunset at the beach\n" +
      "🍴 Try Goan food\n" +
      "📸 Explore colourful local places"
  }

  // -------------------------
  // GOA PACKING
  // -------------------------

  if (
    text.includes("pack") &&
    text.includes("goa")
  ) {
    reply =
      "🎒 For Goa, pack light clothes, comfortable footwear, sunscreen, sunglasses, swimwear, a hat, basic medicines, toiletries and a reusable water bottle."
  }

  // -------------------------
  // MUMBAI
  // -------------------------

  if (text.includes("mumbai")) {
    reply =
      "🌆 Mumbai has many interesting places to explore, including Gateway of India, Marine Drive, Colaba, Elephanta Caves and Juhu Beach."
  }

  // -------------------------
  // LONAVALA
  // -------------------------

  if (text.includes("lonavala")) {
    reply =
      "⛰️ Lonavala is a great short-trip destination. You can visit viewpoints, waterfalls, forts and enjoy the beautiful hill scenery."
  }

  // -------------------------
  // MAHABALESHWAR
  // -------------------------

  if (text.includes("mahabaleshwar")) {
    reply =
      "🍓 Mahabaleshwar is known for beautiful viewpoints, waterfalls, strawberry farms and pleasant hill-station scenery."
  }

  // -------------------------
  // BUDGET
  // -------------------------

  if (
    text.includes("budget") ||
    text.includes("cheap") ||
    text.includes("low cost") ||
    text.includes("₹")
  ) {
    reply =
      "💰 I can help you plan a budget-friendly trip. Tell me your destination, number of days and approximate budget. I can suggest affordable accommodation, food and transport options."
  }

  // -------------------------
  // HOTEL
  // -------------------------

  if (
    text.includes("hotel") ||
    text.includes("stay") ||
    text.includes("accommodation")
  ) {
    reply =
      "🏨 When choosing a hotel, consider your budget, location, reviews and distance from the places you want to visit. Staying slightly away from major tourist areas can sometimes reduce the cost."
  }

  // -------------------------
  // ITINERARY
  // -------------------------

  if (
    text.includes("itinerary") ||
    text.includes("day by day") ||
    text.includes("plan my trip")
  ) {
    reply =
      "🗺️ I can help create a day-by-day itinerary. Tell me your destination, number of days and budget."
  }

  // -------------------------
  // TRANSPORT
  // -------------------------

  if (
    text.includes("transport") ||
    text.includes("bus") ||
    text.includes("train") ||
    text.includes("taxi")
  ) {
    reply =
      "🚗 For transport, you can compare trains, buses, taxis and local transport. For budget trips, public or shared transport can help reduce your expenses."
  }

  // -------------------------
  // ACTIVITIES
  // -------------------------

  if (
    text.includes("activity") ||
    text.includes("activities") ||
    text.includes("adventure")
  ) {
    reply =
      "🎯 Travel activities can include sightseeing, hiking, beaches, adventure sports, boat rides, local markets and cultural experiences. Tell me your destination and I can suggest activities."
  }

  // -------------------------
  // FOOD
  // -------------------------

  if (
    text.includes("food") ||
    text.includes("eat") ||
    text.includes("restaurant")
  ) {
    reply =
      "🍴 Trying local food is one of the best parts of travelling. Look for popular local dishes, affordable local restaurants and places with good recent reviews."
  }

  // -------------------------
  // FAMILY TRIP
  // -------------------------

  if (
    text.includes("family") ||
    text.includes("children") ||
    text.includes("kids")
  ) {
    reply =
      "👨‍👩‍👧‍👦 For a family trip, choose comfortable accommodation, easy transport and family-friendly activities. Avoid planning too many activities in one day so everyone can relax."
  }

  // -------------------------
  // COUPLE TRIP
  // -------------------------

  if (
    text.includes("couple") ||
    text.includes("romantic")
  ) {
    reply =
      "💑 For a couple trip, you can include scenic places, sunset spots, relaxed cafés, sightseeing and a little free time to enjoy the destination together."
  }

  // -------------------------
  // SOLO TRIP
  // -------------------------

  if (
    text.includes("solo") ||
    text.includes("alone")
  ) {
    reply =
      "🎒 For a solo trip, choose safe accommodation, keep important documents secure, share your itinerary with someone you trust and use reliable transport."
  }

  // -------------------------
  // PACKING
  // -------------------------

  if (
    text.includes("packing") ||
    text.includes("what should i pack")
  ) {
    reply =
      "🎒 A basic travel packing list includes comfortable clothes, footwear, toiletries, medicines, identification documents, phone charger, power bank and any destination-specific items."
  }

  // -------------------------
  // WEATHER
  // -------------------------

  if (text.includes("weather")) {
    reply =
      "🌦️ Weather can change depending on the destination and season. For live weather information, check a current weather service before travelling."
  }

  // -------------------------
  // BEST TIME
  // -------------------------

  if (
    text.includes("best time") ||
    text.includes("best season") ||
    text.includes("when should i visit")
  ) {
    reply =
      "📅 The best time to visit depends on the destination and the type of trip you want. Tell me the destination and I can explain the usual travel seasons."
  }

  // -------------------------
  // SAFETY
  // -------------------------

  if (
    text.includes("safe") ||
    text.includes("safety")
  ) {
    reply =
      "🛡️ For safer travel, keep your important documents secure, avoid carrying unnecessary valuables, use trusted transport and share your basic itinerary with someone you trust."
  }

  // -------------------------
  // TRAIN
  // -------------------------

  if (
    text.includes("train") &&
    !text.includes("transport")
  ) {
    reply =
      "🚆 Train travel can be a convenient option for many Indian destinations. Check the current schedule, availability and ticket details before travelling."
  }

  // -------------------------
  // TRIP IDEAS
  // -------------------------

  if (
    text.includes("where should i go") ||
    text.includes("where can i go") ||
    text.includes("trip ideas")
  ) {
    reply =
      "🌍 Some trip ideas include Goa for beaches, Lonavala for hills, Mahabaleshwar for nature, Jaipur for heritage and Kerala for scenic experiences. Tell me your budget and number of days for more suitable ideas."
  }

  // -------------------------
  // THANKS / BYE
  // -------------------------

  if (
    text === "bye" ||
    text.includes("goodbye")
  ) {
    reply =
      "Bye! 👋 Have a wonderful trip and travel safely! ✈️🌍"
  }

  // -------------------------
  // SEND RESPONSE
  // -------------------------

  res.json({
    reply: reply
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(
    `Smart Traveller AI Server running on http://localhost:${PORT}`
  )
})