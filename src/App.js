import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import ChangeColor from './colorChange/ChangeColor';
import BackgroundChange from './selectBackground/BackgroundChange';
import { useSelector } from 'react-redux';

function App() {
  const {image} = useSelector((state)=>state);
  // console.log('image :: ' , image);

  const imageUrl = image
  return (
<div style={{
  backgroundImage: `url(${imageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
}}>
  <BackgroundChange />
  <Counter/>
  <ChangeColor/>
</div>
  );
}

export default App;
