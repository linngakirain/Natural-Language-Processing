import React, { createContext, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'

const SpeechContext = createContext({
  speechRecognizingContent: '',
  speechRecognizedContent: '',
  speechTranscribingContent: '',
  speechTranscribedContent: '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setSpeechRecognizingContent: (v: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setSpeechRecognizedContent: (v) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setSpeechTranscribingContent: (v) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setSpeechTranscribedContent: (v) => {},
})

export const SpeechContextProvider = ({ children }) => {
  const [speechRecognizingContent, setSpeechRecognizingContent] = useState('')
  const [speechRecognizedContent, setSpeechRecognizedContent] = useState('')
  const [speechTranscribingContent, setSpeechTranscribingContent] = useState('')
  const [speechTranscribedContent, setSpeechTranscribedContent] = useState('')

  return (
    <SpeechContext.Provider
      value={{
        speechRecognizingContent,
        speechRecognizedContent,
        speechTranscribingContent,
        speechTranscribedContent,
        setSpeechRecognizingContent,
        setSpeechRecognizedContent,
        setSpeechTranscribingContent,
        setSpeechTranscribedContent,
      }}
    >
      {children}
    </SpeechContext.Provider>
  )
}

export const SpeechLayout = () => {
  return (
    <SpeechContextProvider>
      <Outlet />
    </SpeechContextProvider>
  )
}

export const useSpeechContext = () => {
  return useContext(SpeechContext)
}
