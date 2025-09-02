import React, { createContext, useContext, useMemo, useState } from 'react'

export type SpeechContextState = {
  speechRecognizingContent: any
  speechRecognizedContent: any
  speechTranscribingContent: any
  speechTranscribedContent: any
}

export type SpeechContextActions = {
  setSpeechRecognizingContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechRecognizedContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechTranscribingContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechTranscribedContent: React.Dispatch<React.SetStateAction<string>>
  resetSpeechState: () => void
}

export type SpeechContextValue = SpeechContextState & SpeechContextActions

const SpeechContext = createContext<SpeechContextValue | undefined>(undefined)

export const SpeechProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [speechRecognizingContent, setSpeechRecognizingContent] =
    useState<string>('')
  const [speechRecognizedContent, setSpeechRecognizedContent] =
    useState<string>('')
  const [speechTranscribingContent, setSpeechTranscribingContent] =
    useState<string>('')
  const [speechTranscribedContent, setSpeechTranscribedContent] =
    useState<string>('')

  const resetSpeechState = () => {
    setSpeechRecognizingContent('')
    setSpeechRecognizedContent('')
    setSpeechTranscribingContent('')
    setSpeechTranscribedContent('')
  }

  const value = useMemo<SpeechContextValue>(
    () => ({
      speechRecognizingContent,
      speechRecognizedContent,
      speechTranscribingContent,
      speechTranscribedContent,
      setSpeechRecognizingContent,
      setSpeechRecognizedContent,
      setSpeechTranscribingContent,
      setSpeechTranscribedContent,
      resetSpeechState,
    }),
    [
      speechRecognizingContent,
      speechRecognizedContent,
      speechTranscribingContent,
      speechTranscribedContent,
    ],
  )

  return (
    <SpeechContext.Provider value={value}>{children}</SpeechContext.Provider>
  )
}

export const useSpeechContext = (): SpeechContextValue => {
  const ctx = useContext(SpeechContext)
  if (!ctx) {
    throw new Error('useSpeechContext must be used within a SpeechProvider')
  }
  return ctx
}
