import logo from "./logo.svg";
import "./App.css";
import "./styles/globals.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Filter from "./components/filters/Filters";
import NewsFormat from "./components/newsFormat/NewsFormat";
import NewsReport from "./components/newsReport/NewsReport";
import { data } from "../src/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile data={data.reportDetailParts.reportDetailPart2} />
      <Filter />
      <NewsFormat data={data.reportDetailParts.reportDetailPart4} />
      <NewsReport data={data.reportDetailParts} />
    </div>
  );
}

export default App;
