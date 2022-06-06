import { atom } from 'recoil'
import { LanguageOptions, languageOptions } from './constants/languageOptions'

export const languageState = atom<LanguageOptions>({
  key: 'language',
  default: languageOptions[0]
})
