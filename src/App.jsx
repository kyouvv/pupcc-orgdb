import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import CardComponent from './components/CardComponent';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pupcc-web.onrender.com/api/getorgs');
        const result = await response.json();
        console.log('Full response:', result); // Log full response
        setData(result); // Set the entire response in the state
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress />
          <Typography variant="body1" gutterBottom style={{ marginTop: '16px' }}>
            Getting information...
          </Typography>
        </div>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Organization List
          </Typography>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {filteredData.length > 0 ? (
            <Grid container spacing={4}>
              {filteredData.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <CardComponent name={item.name} image={item.image} category={item.category} social={item.social} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <Typography>No results found</Typography>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};

export default App;
