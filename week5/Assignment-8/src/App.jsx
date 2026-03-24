import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import Counter from "./components/Counter";
import Footer from "./components/Footer"
function App(){
  return(
  <div>
     <Navbar />
     <div className="m-16 min-h-screen">
        <UsersList />
        <Counter />
        </div>
        <Footer />
     </div>
  );
}
export default App;