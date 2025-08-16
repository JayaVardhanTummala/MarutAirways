import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { duration } from "@mui/material/styles";

const flightData = [
  {
    id: 1,
    startTime: "8:30",
    duration: "2h",
    title: "FLY91 ,Air India Express",
    description: "Plants are essential for all life.",
    location:"Hyderabad"
  },
  {
    id: 2,
    startTime: "9:30",
    title: "IndiGo",
    duration: "3h",
    description: "Animals are a part of nature.",
    location:"Bangalore"
  },
  {
    id: 3,
    startTime: "10:30",
    title: "Air India",
    duration: "5h",
    description: "Humans depend on plants and animals for survival.",
    location:"Delhi"
  },
  {
    id: 3,
    startTime: "11:30",
    title: "SpiceJet",
    duration: "8h",
    description: "Humans depend on plants and animals for survival.",
    location:"MumBai"
  },
];

function FlightCards() {
  const [selectedCard, setSelectedCard] = React.useState(0);
const [flights] = React.useState(flightData);

  const newArray = flights.filter((flight) => {
    debugger
  // return a boolean value based on a condition
//   return condition; 
});
  return (
    <Box
      style={{ marginTop: "20px", marginLeft: "20px" }}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {flightData.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default FlightCards;
