import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { languageState, codeState, loadingState } from '../appContext'
import { executeCode } from '../utils/executeCode'

const CodeEditor = () => {
  const [code, setCode] = useRecoilState(codeState)
  const [fontSize, setFontSize] = useState('14')

  const language = useRecoilValue(languageState)
  const loading = useRecoilValue(loadingState)
  const options = { fontSize: fontSize + 'px' }

  function handleExecuteCode() {
    executeCode(code, language.id)
  }
  return (
    <>
      <div
        className="flex flex-col tooltip tooltip-bottom z-10 w-1/3  place-items-start ml-2"
        data-tip={fontSize}
      >
        <label htmlFor="fontSize">Font Size :</label>
        <input
          id="fontSize"
          type="range"
          min={12}
          onChange={(e) => {
            setFontSize(e.target.value)
          }}
          max={36}
          value={fontSize}
          className="range range-sm"
        />
      </div>
      <Editor
        height="80vh"
        defaultLanguage={language.value || 'javascript'}
        className="mt-4"
        options={options}
        theme="vs-dark"
        value="// Write your code here"
        onChange={(newValue: string | undefined) =>
          setCode(() => {
            if (newValue) return newValue
            else return ''
          })
        }
        defaultValue={code}
      />
      <button
        type="button"
        className={`btn btn-success m-4 ${loading ? 'loading w-36' : 'w-32'}`}
        onClick={handleExecuteCode}
      >
        {loading ? 'Executing' : 'Execute'}
      </button>
    </>
  )
}

export default CodeEditor
