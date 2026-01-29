import { useCallback, useState } from 'react';
import './App.css';
import { Search } from './Search';

const allBrands = [
    { id: "1", name: "puma"},
    { id: "2", name: "adidas"},
    { id: "3", name: "nike"},
    { id: "4", name: "file"},
    { id: "5", name: "reebok"},
]

function App() {
  const [brands, setBrands] = useState(allBrands);

  const handleChange = useCallback((value) => {
    const updated = value?.length > 0 ? brands.filter(map => map.name.includes(value)) : allBrands;
    setBrands(updated);
  }, []);

  const handleSort = () => {
    const sorted = [...allBrands].sort((a, b) => {
      const A = a.name.toUpperCase();
      const B = b.name.toUpperCase();
      if(A < B) return -1;
      if(A > B) return 1;
      return 0;
    });
    setBrands(sorted);
  }

  return (
    <div className="App">
      <h2>useCallback Hook</h2>
      <div className="flex">
        <div>
          <button onClick={handleSort}>Sort by Name </button>
          <Search handleChange={handleChange}/>
          <div>
            {
              brands.map(map => <p>{map.name}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
