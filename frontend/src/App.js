import Navbar from "./component/Navbar";
import Promotioncard from "./component/Promotioncard";
import Chartcard from "./component/Chartcard";
import TrendingCard from "./component/TrendingCard";
function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-8 md:flex-row justify-between bg-slate-200">
      <div className=""><Chartcard /></div>
      <div className="flex flex-col">
        <Promotioncard />
        <TrendingCard />
        </div>
      </div>
    </div>
  );
}

export default App;
