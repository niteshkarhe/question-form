import { useState } from "react";

import AudioRecorder from './page/component/AudioRecorder';
import VideoRecorder from './page/component/VideoRecorder';
import LandingPage from './page/landingPage';

function App() {
  const [displayForm, setDisplayForm] = useState(false);

  return (
    <div className="App">
      {
        displayForm && <VideoRecorder />
      }
      {
        !displayForm && <LandingPage isValidJob={setDisplayForm}/>
      }
    </div>
  );
}

export default App;
