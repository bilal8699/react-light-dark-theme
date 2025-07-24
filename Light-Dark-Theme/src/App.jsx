import React from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("light-theme")

  React.useEffect(() => {
    document.body.className = theme
  }, [theme])

  function toggle() {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  return (
    <>
      <nav>
        <header>
          <h1>M.bilal</h1>
          <div className="nav-links">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>
                <button
                  className='btn'
                  onClick={toggle}>
                  {theme === "light-theme" ? "dark-theme 🌙" : "light-theme ☀️"}
                </button>
              </li>
            </ul>
          </div>
        </header>
      </nav>
      <main>
        <h2>Welcome to My Website</h2>
        <p>"This is a basic website made with React. It has a light and dark mode that you can switch by clicking a button.</p>
      </main>
    </>
  );
}

export default App;
