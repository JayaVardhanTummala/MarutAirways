# Flight Dashboard with Booking System

A comprehensive React.js application that displays a dashboard of flights with search, filter, and booking functionality. Built with Vite + React using only React state (no backend, no API calls, no UI frameworks).

## Features

- **Authentication System**: Basic login and signup functionality using React state
- **Flight Dashboard**: Display flights in a clean table format with booking capabilities
- **From/To Booking System**: Complete booking system with departure and destination locations
- **Search Functionality**: Search flights by pilot name, from location, or to location
- **Advanced Filtering**: Filter flights by departure location (From) and destination (To)
- **Booking Management**: Book flights and manage your reservations
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional styling with CSS only

## Table Columns

- Flight Start Time
- Total Duration
- Pilot Name
- From (Departure Location)
- To (Destination Location)
- Price
- Available Seats
- Action (Book Button)

## Requirements Met

✅ Store flight data in a local array inside a React state variable  
✅ Add a search bar that filters flights by pilot name or location  
✅ Add a filter dropdown that can filter flights by location  
✅ Display the filtered results in a table  
✅ Basic Login and Signup page using React state for authentication  
✅ Keep the code minimal, clear, and beginner-friendly with functional components and hooks  
✅ Use basic CSS for simple styling — no UI frameworks  
✅ **Bonus**: Complete booking system with From/To functionality  

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Default Login Credentials
- **Username**: `admin`
- **Password**: `admin123`

### Features

1. **Login/Signup**: 
   - Use the default credentials or create a new account
   - Switch between login and signup forms

2. **Flight Dashboard**:
   - View all flights in a table format
   - See departure and destination locations
   - View pricing and seat availability
   - Search flights using the search bar
   - Filter flights by departure and destination locations

3. **Booking System**:
   - Click "Book" button on any available flight
   - Fill in passenger details (name and email)
   - Confirm booking to add to your reservations
   - View all your bookings in the "My Bookings" tab

4. **Search and Filter**:
   - Search by pilot name, from location, or to location (case-insensitive)
   - Filter by specific departure locations (From dropdown)
   - Filter by specific destination locations (To dropdown)
   - Combine search and filters for precise results

5. **Booking Management**:
   - Switch to "My Bookings" tab to view all reservations
   - See booking details including flight info, passenger name, and status
   - Cancel bookings as needed

## Project Structure

```
src/
├── App.jsx          # Main application component with booking system
├── App.css          # Application styles including booking modal
├── index.css        # Global styles
└── main.jsx         # Application entry point
```

## Technologies Used

- **React 18**: For building the user interface
- **Vite**: For fast development and building
- **CSS**: For styling (no UI frameworks)
- **React Hooks**: useState for state management

## Code Highlights

- **Functional Components**: All components use functional syntax with hooks
- **State Management**: Uses React's useState hook for all state management
- **Booking System**: Complete booking workflow with modal forms
- **Advanced Filtering**: Multiple filter options for precise flight search
- **Tab Navigation**: Clean tab-based interface for flights and bookings
- **Responsive Design**: Mobile-first approach with CSS media queries
- **Clean Code**: Well-structured, readable, and maintainable code

## Sample Flight Data

The application includes 6 sample flights with realistic data:
- New York ↔ Los Angeles
- Los Angeles ↔ Chicago  
- Chicago ↔ Miami
- Miami ↔ Seattle
- Seattle ↔ Boston
- Boston ↔ New York

Each flight includes:
- Departure and destination locations
- Flight times and durations
- Pilot information
- Pricing and seat availability

## Future Enhancements

- Add seat selection functionality
- Implement payment processing simulation
- Add flight status updates
- Enhance the authentication system with password recovery
- Add flight details modal with more information
- Implement data persistence using localStorage
- Add sorting functionality for table columns
- Add pagination for large datasets
- Implement real-time seat availability updates

## Contributing

This is a learning project. Feel free to fork and experiment with the code!

## License

This project is open source and available under the [MIT License](LICENSE).
