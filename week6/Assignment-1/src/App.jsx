import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import Counter from "./components/Counter";
import Footer from "./components/Footer"
import FormDemo from "./components/FormDemo";
import UserForm from "./components/UserForm";
function App(){
   console.log("App rendered")
  return(
  <div>
     <Navbar />
     <div className="m-16 min-h-screen">
      {/* <UsersList /> */}
      {/* <Counter /> */ }
        {/*<FormDemo />*/}
        <UserForm />
        </div>
        <Footer />
     </div>
  );
}
export default App;