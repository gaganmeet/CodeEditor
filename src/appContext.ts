import { atom } from 'recoil'
import { LanguageOptions, languageOptions } from './constants/languageOptions'

export const languageState = atom<LanguageOptions>({
  key: 'language',
  default: languageOptions[0]
})

export const resultState = atom<string>({
  key: 'result',
  default: ''
})

export const loadingState = atom<boolean>({
  key: 'loading',
  default: false
})
export const codeState = atom<string>({
  key: 'code',
  default: ""
})