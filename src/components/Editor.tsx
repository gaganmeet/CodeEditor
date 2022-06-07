import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { languageState, codeState } from '../appContext'
import { executeCode } from '../utils/executeCode'

const CodeEditor = () => {
  const [code, setCode] = useRecoilState(codeState)
  const language = useRecoilValue(languageState)
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
        defaultValue="// some comment"
      />
      <button
        type="button"
        className="btn btn-success w-32 m-4"
        onClick={handleExecuteCode}
      >
        Execute
      </button>
    </>
  )
}

export default CodeEditor
