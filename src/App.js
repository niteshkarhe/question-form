import { useState } from "react";

import AudioRecorder from './page/component/AudioRecorder';
import VideoRecorder from './page/component/VideoRecorder';
import QuestionForm from './page/questionForm';
import LandingPage from './page/landingPage';

function App() {
  const [displayForm, setDisplayForm] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  return (
    <div className="App">
      {
        displayForm && <QuestionForm questions={questionList} />
      }
      {
        !displayForm && <LandingPage isValidJob={setDisplayForm} questions={setQuestionList}/>
      }
    </div>
  );
}

export default App;
