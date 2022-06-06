import './App.css'
import { useState } from 'react'
import Editor from '@monaco-editor/react'
import { languageOptions } from './constants/languageOptions'
import axios, { AxiosRequestConfig } from 'axios'
import OutputWindow from './components/OutputWindow'
import LanguageSelector from './components/LanguageSelector'
import { useRecoilState } from 'recoil'
import { languageState } from './appContext'

const App: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASEURL
  const [code, setCode] = useState('')
  const [result, setResult] = useState('')
  const [language, setLanguage] = useRecoilState(languageState)
  console.log(language)

  const checkStatus = async (token: string) => {
    const options: AxiosRequestConfig = {
      method: 'GET',
      url: baseUrl + '/submissions/' + token,
      params: { base64_encoded: 'true', fields: '*' }
    }
    try {
      const response = await axios.request(options)
      const statusId = response.data.status?.id

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token)
        }, 2000)
        return
      } else {
        setResult(response.data)
        console.log('response.data', response.data)
        return
      }
    } catch (err) {
      console.log('err', err)
    }
  }
  async function executeCode() {
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code)
    }
    const options = {
      method: 'POST',
      url: import.meta.env.VITE_BASEURL + '/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json'
      },
      data: formData
    }
    const token = await (await axios.request(options)).data.token
    // async function getResult() {
    //   const result = await axios.get(
    //     `${
    //       import.meta.env.VITE_BASEURL
    //     }/submissions/${token}?base64_encoded=true&wait=false&fields=stdout,time,memory,stderr,token,compile_output,message,status`
    //   )
    //   return result
    // }
    // const res = await getResult()
    checkStatus(token)
    console.log('token', token)
  }
  return (
    <div className="m-auto w-4/5">
      <div className="flex flex-col justify-center h-screen">
        <LanguageSelector />
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
          onClick={executeCode}
        >
          Execute
        </button>
        <OutputWindow outputDetails={result} />
      </div>
    </div>
  )
}

export default App
