import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById("foot")).render(
  <React.StrictMode>
    <footer>
      <p>
        &copy; GNU/Linux Gang {new Date().getFullYear()}
      </p>
    </footer>
  </React.StrictMode>
);
