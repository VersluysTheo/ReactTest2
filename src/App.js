import './App.css';
import Header from './header/Header';
import MediaCard from './card/Card';
import Footer from './Footer/Footer';
import DataCard from './Datacard/Datacard';


function App() {
  return (
    <div className="App">
      <Header/>
    <p> ceci est un test</p>
    <div className='cardsNudiste'>
    <MediaCard/>
    <MediaCard/>
    <MediaCard/>
    </div>
    <div>
    <DataCard/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
