import React, { createContext, useContext, useMemo, useState } from 'react'

export type SpeechContextState = {
  speechRecognizingContent: string
  speechRecognizedContent: string
  speechTranscribingContent: string
  speechTranscribedCOntent: string
}

export type SpeechContextActions = {
  setSpeechRecognizingContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechRecognizedContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechTranscribingContent: React.Dispatch<React.SetStateAction<string>>
  setSpeechTranscribedCOntent: React.Dispatch<React.SetStateAction<string>>
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
  const [speechTranscribedCOntent, setSpeechTranscribedCOntent] =
    useState<string>('')

  const resetSpeechState = () => {
    setSpeechRecognizingContent('')
    setSpeechRecognizedContent('')
    setSpeechTranscribingContent('')
    setSpeechTranscribedCOntent('')
  }

  const value = useMemo<SpeechContextValue>(
    () => ({
      speechRecognizingContent,
      speechRecognizedContent,
      speechTranscribingContent,
      speechTranscribedCOntent,
      setSpeechRecognizingContent,
      setSpeechRecognizedContent,
      setSpeechTranscribingContent,
      setSpeechTranscribedCOntent,
      resetSpeechState,
    }),
    [
      speechRecognizingContent,
      speechRecognizedContent,
      speechTranscribingContent,
      speechTranscribedCOntent,
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
