import './App.css'; //JS requires all import statements to be at the top before other logic. You can only define function App() once and export default App once per file.//
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; //BrowserRouter: Wraps the whole app and listens to the browser's URL bar.//Routes: the container that holds all your specific routes.
//Route;Maps a specific URL path like /todos) to a specific component (like <h1>Todos Page Coming Soon</h1>).// //Link: replaces the standard HTML <a href="..."> tag. It allows you to navigate w/o the browser performing a full page reload."
function App() {
  return (
    <BrowserRouter>
      {/* The Navigation Bar - always visible */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* The Traffic Cop - swaps components based on URL */}
      <Routes>
        {/* Temporary placeholder for the Home page */}
        <Route path="/" element={
          <div>
            <h1>Task Management App</h1>
            <p>Welcome! Choose Todos or Contact above.</p>
          </div>
        } />

        {/* Temporary placeholders for the required views */}
        <Route path="/todos" element={<h1>Todos Page Coming Soon</h1>} />
        <Route path="/contact" element={<h1>Contact Page Coming Soon</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;