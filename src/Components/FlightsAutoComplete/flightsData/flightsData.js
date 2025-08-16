// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const flightsData = [
  {
    flightNumber: "FA101",
    label: "Fake Airways",
    origin: {
      city: "New York",
      airportCode: "JFK",
    },
    destination: {
      city: "Los Angeles",
      airportCode: "LAX",
    },
    departureTime: "2025-08-15T08:00:00Z",
    arrivalTime: "2025-08-15T11:30:00Z",
    status: "On Time",
    price: {
      currency: "USD",
      amount: 250.75,
    },
  },
  {
    flightNumber: "FB202",
    label: "Dummy Air",
    origin: {
      city: "London",
      airportCode: "LHR",
    },
    destination: {
      city: "Paris",
      airportCode: "CDG",
    },
    departureTime: "2025-08-15T14:15:00Z",
    arrivalTime: "2025-08-15T15:30:00Z",
    status: "Delayed",
    price: {
      currency: "EUR",
      amount: 99.0,
    },
  },
];

export default flightsData;
