import React from 'react';
import OurFeatures from './Components/SearchComponents/OurFeatures';
import PopularCategories from './Components/SearchComponents/PopularCategories';
import SearchFlat from './Components/SearchComponents/SearchFlat';

function App() {
  return (
    <div>
      <SearchFlat></SearchFlat>
      <OurFeatures></OurFeatures>
      <PopularCategories></PopularCategories>
    </div>
  );
}

export default App;