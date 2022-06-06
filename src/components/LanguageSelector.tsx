import { languageOptions } from '../constants/languageOptions'

const LanguageSelector = () => {
  return (
    <div className="form-control w-full max-w-xs ml-8">
      <label className="label">
        <span className="label-text">Programming language</span>
      </label>
      <select title="language" className="select select-bordered">
        <option disabled selected>
          Select Language
        </option>
        {languageOptions.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector
