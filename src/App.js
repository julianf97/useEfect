import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/Navbar/ItemListContainer';
import { ItemCounts } from './components/itemCounts';



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="mensaje"/>
      <ItemCounts/>
    </div>
  )
}

export default App;
