import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button, Grid } from '@mui/material';
import { red, green, yellow, pink, orange, blue } from '@mui/material/colors';

const CardComponent = ({ name, image, category, social }) => {
  // Define a mapping of categories to colors
  const categoryColors = {
    'Cultural/Arts/Dance': 'primary.main',
    'Academic': 'secondary.main',
    'Advocacy': red[500],
    "Political": red[600],
    'Publication': green[400],
    'Scholars': yellow[800],
    'Special Interest': pink[200],
    'Religious': orange[600]   // Add more categories and corresponding colors
    // Add more category-color mappings as needed
  };

  // Define the color for the button
  const buttonColor = blue[400];

  // Determine the color for the category
  const color = categoryColors[category] || 'text.secondary';

  // Function to handle button click for redirection
  const handleSocialButtonClick = () => {
    window.open(social, '_blank'); // Open the social link in a new tab
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Box
              bgcolor={color}
              color="white"
              borderRadius={4}
              px={2}
              py={1}
              mb={1}
              display="inline-block"
              fontSize="small" // Adjust the font size here
            >
              {category}
            </Box>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              style={{ backgroundColor: buttonColor, borderRadius: 4 }} // Apply the same border radius as category box
              onClick={handleSocialButtonClick} // Call the function to handle button click
            >
              Social
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
