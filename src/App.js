import logo from './logo.svg';
import './App.css';
import Counter from './counter/Counter';
import ChangeColor from './colorChange/ChangeColor';

function App() {
  return (
<div style={{
  backgroundImage: "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701385699.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100vh',
}}>
  <Counter/>
  <ChangeColor/>
</div>
  );
}

export default App;
