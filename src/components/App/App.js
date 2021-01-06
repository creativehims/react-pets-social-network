import React, { useState } from 'react';
import { Profile } from '../Profile/Profile';
import { Directory } from '../Directory/Directory';
import '../../styles.css';

const App = () => {
  const [currentUsername, setCurrrentUsername] = useState(null);

  const handleChoose = (newUsername) => {
    setCurrrentUsername(newUsername);
  };

  const handleReturnToDirectoryClick = () => {
    setCurrrentUsername(null);
  };

  let body;
  if (currentUsername) {
    body = <Profile username={currentUsername} onChoose={handleChoose} />;
  } else {
    body = <Directory onChoose={handleChoose} />;
  }

  return (
    <div className="App">
      <header>
        <h1>PetBook</h1>

        <nav>
          {currentUsername && (
            <button onClick={handleReturnToDirectoryClick}>
              Return to directory
            </button>
          )}
        </nav>
      </header>

      <main>{body}</main>
    </div>
  );
};

export default App;
