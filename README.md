# PUPCC-Organizations Database (React Frontend)

## Technologies used:
- React
- Vite
- TailwindCSS for styling
- DaisyUI for prebuilt components
- React Router DOM for Routing
- React Pagination
- Framer-Motion

# Components

## Database.jsx

### Description
The `Database` component is a React component responsible for displaying a paginated list of cards containing data retrieved from a database. It provides a search functionality to filter the displayed items based on user input and utilizes pagination for navigation through the items.

### Props
- `data`: An array of objects representing the data to be displayed in the cards.

### Dependencies
- React
- useState
- useEffect
- ReactPaginate
- react-router-dom
- framer-motion

### Functionalities
1. **Search Functionality:**
   - Allows users to input a search term to filter the displayed items.
   - Updates the URL query parameter with the search term. (This is for the landing page search bar.)
   - Filters data based on the provided search term.

2. **Pagination:**
   - Divides the data into pages, with a fixed number of items per page.
   - Allows users to navigate through pages using previous and next buttons.
   - Displays a limited number of page links for better navigation experience.

3. **Animation:**
   - Utilizes Framer Motion for animation effects on pagination.

4. **Routing:**
   - Utilizes `react-router-dom` for routing functionality, enabling navigation to different routes.

## Functions
```jsx

useEffect(() => {
        // Read search term from URL query parameter
        const params = new URLSearchParams(location.search);
        const searchTermParam = params.get("search") || '';
        setSearchTerm(searchTermParam);

        // Filter data based on search term
        const filteredItems = data.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTermParam.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTermParam.toLowerCase()) ||
                item.category.toLowerCase().includes(searchTermParam.toLowerCase())
        );
        setFilteredData(filteredItems);
    }, [data, location.search]);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);
        // Update URL query parameter with search term
        setSearchParams({ search: value });
    };

```

These are the important functions that handles. Filteration of the contents. Search events, and Pagination.

## Landing.jsx

## Description
The `Landing` component is a React component representing the landing page of the application. It provides users with information about the application and allows them to search for organizations within the PUP System. Additionally, it offers a link to view the full database of organizations and displays social media links for further engagement.

## Props
- `data`: An array of objects containing data related to organizations.
  
## Dependencies
- React
- Framer Motion

## Functionalities
1. **Search Functionality:**
   - Utilizes a search bar component (`SearchBar`) to enable users to search for organizations within the PUP System.
   - Provides suggestions as users type in the search bar.

2. **Navigation:**
   - Allows users to navigate to the full database of organizations.

3. **Social Media Links:**
   - Displays links to the Facebook page and Discord server for further engagement.


## Functions
```jsx
const handleSuggestionClick = (searchTerm) => {
        // Navigate to the database route with search term as a query parameter
        navigate(`/database?search=${encodeURIComponent(searchTerm)}`);
    };
```
This snippet handles the search bar. When a suggestion is clicks it redirects the user to the database filling in the database's search bar to filter what suggestion was clicked.

## SearchBar.jsx

## Description
The `SearchBar` component is a reusable React component responsible for rendering a search input field and displaying suggestions based on user input. It provides functionality to filter data and handle user interaction with the search bar.

## Props
- `data`: An array of objects containing data to be filtered and displayed as suggestions.
- `onSuggestionClick`: A function to be called when a suggestion is clicked. It typically navigates or performs an action based on the selected suggestion.

## Dependencies
- React
- React Router DOM

## Functionalities
1. **Search Input Field:**
   - Displays an input field where users can enter search terms.

2. **Suggestion Display:**
   - Shows suggestions based on the user's input.
   - Suggestions are filtered from the provided data based on the entered search term.

3. **Interaction Handling:**
   - Updates the state with the entered search term as users type.
   - Calls the `onSuggestionClick` function when a suggestion is clicked.

## Functions
```jsx
const onChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setValue(event.target.value);
        setShowSuggestions(searchTerm !== '');
    }

    // Filter the data based on the search term
    const filteredData = data ? data.filter(item => {
        const term = value.toLowerCase();
        const name = item.name.toLowerCase();
        return term && name.startsWith(term);
    }) : [];
```
Main functions. For filtering and handling changes with the input field.

# Data Fetching

```jsx
useEffect(() => {
        let timeout; // Declare timeout variable
        fetchData()
            .then(apiData => {
                setData(apiData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://pupcc-web.onrender.com/api/getorgs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    };
```
Data fetching happens within the App.jsx and Database_route.jsx, I have implemented a loading screen since the data does not load instantly. It fetches the data from `https://pupcc-web.onrender.com/api/getorgs`. A python flask Backend.