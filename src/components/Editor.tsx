import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { languageState, codeState, loadingState } from '../appContext'
import { executeCode } from '../utils/executeCode'

const CodeEditor = () => {
  const [code, setCode] = useRecoilState(codeState)

  const language = useRecoilValue(languageState)
  const loading = useRecoilValue(loadingState)

  function handleExecuteCode() {
    executeCode(code, language.id)
  }
  return (
    <>
      <Editor
        height="80vh"
        defaultLanguage={language.value || 'javascript'}
        className="mt-4"
        theme="vs-dark"
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
