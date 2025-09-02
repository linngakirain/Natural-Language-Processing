import { Routes, Route } from 'react-router-dom'
import SpeechRecognitionPage from './pages/SpeechRecognition'
import { SpeechLayout } from './contexts/SpeechContext'

function App() {
  return (
    <>
      <Routes>
        <Route element={<SpeechLayout />}>
          <Route path="/*" element={<SpeechRecognitionPage />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
