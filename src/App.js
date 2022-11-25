import './App.css';
import FirstContent from './Component/Home/FirstContent/FirstContent';
import Header from './Component/Home/Header/Header';
import HotDeals from './Component/Home/HotDeals/HotDeals';
import ManiMenu from './Component/Home/MainMenu/ManiMenu';
import Slider from './Component/Home/Slider/Slider';

function App() {
  return (
    <div className="">
      <Header></Header>
      <ManiMenu></ManiMenu>
      <FirstContent></FirstContent>
      <Slider></Slider>
      <HotDeals></HotDeals>
    </div>
  );
}

export default App;
