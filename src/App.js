import './App.css';
import Index from './Components/Index'
import { NavbarProvider, useNavbar } from './Components/Navbar Context/NavbarContextAPI';

function App() {
  const {isMenuOpen} = useNavbar
  return (
    <NavbarProvider>
      <div className={`bg-customGray`}>
      {isMenuOpen && (
          <div className="phs:fixed inset-0 phs:bg-black phs:bg-opacity-50 phs:z-10 phs:pointer-events-auto"></div>
        )}
        <Index />
      </div>
    </NavbarProvider>   
  );
}

export default App;
