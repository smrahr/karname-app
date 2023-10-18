import logo from './logo.svg';
import './App.css';
import "./styles/globals.css";
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Filter from './components/filters/Filters';
import NewsFormat from './components/newsFormat/NewsFormat';
import NewsReport from './components/newsReport/NewsReport';


function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Filter />
      <NewsFormat />
      <NewsReport />
    </div>
  );
}

export default App;
