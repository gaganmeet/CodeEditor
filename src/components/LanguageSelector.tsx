import React from 'react'

const LanguageSelector = () => {
  return (
    <div className="flex flex-col form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Pick the best fantasy franchise</span>
        <span className="label-text-alt">Alt label</span>
      </label>
      <select title="language" className="select select-bordered">
        <option disabled selected>
          Pick one
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
      <label className="label">
        <span className="label-text-alt">Alt label</span>
        <span className="label-text-alt">Alt label</span>
      </label>
    </div>
  )
}

export default LanguageSelector
