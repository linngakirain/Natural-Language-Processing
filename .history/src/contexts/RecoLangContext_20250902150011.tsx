import React, { createContext, useContext, useMemo, useState } from 'react'
import type { FC, PropsWithChildren, Dispatch, SetStateAction } from 'react'
import { Outlet } from 'react-router-dom'

export type RecoLangContextState = {
  recoLang: string
  setRecoLang: Dispatch<SetStateAction<string>>
}

const RecoLangContext = createContext<RecoLangContextState | undefined>(
  undefined,
)

export const RecoLangProvider: FC<PropsWithChildren> = ({ children }) => {
  const [recoLang, setRecoLang] = useState<string>('en-HK')

  const value = useMemo<RecoLangContextState>(
    () => ({ recoLang, setRecoLang }),
    [recoLang],
  )

  return (
    <RecoLangContext.Provider value={value}>
      {children}
    </RecoLangContext.Provider>
  )
}

export const RecoLangLayout = () => {
  return (
    <RecoLangProvider>
      <Outlet />
    </RecoLangProvider>
  )
}

export const useRecoLang = (): RecoLangContextState => {
  const ctx = useContext(RecoLangContext)
  if (!ctx) {
    throw new Error('useRecoLang must be used within a RecoLangProvider')
  }
  return ctx
}
