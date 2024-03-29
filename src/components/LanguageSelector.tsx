import { useRecoilState } from 'recoil'
import { languageOptions } from '../constants/languageOptions'
import { languageState } from '../appContext'
import React from 'react'

const LanguageSelector = () => {
  const [language, setLanguage] = useRecoilState(languageState)
  function handleLanguageChange(e: any) {
    const id = e.target.value
    const language = languageOptions.find((l) => l.id == id)
    if (language) setLanguage(language)
  }
  return (
    <div className="form-control ml-8 w-full max-w-xs">
      <label className="label">
        <span className="label-text">Programming language</span>
      </label>
      <select
        title="language"
        className="select select-bordered"
        onChange={handleLanguageChange}
      >
        {languageOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
