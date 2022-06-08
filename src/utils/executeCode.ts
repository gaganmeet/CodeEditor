import axios from 'axios'
import { checkStatus } from './checkStatus'
import { loadingState } from '../appContext'
import { setRecoil } from 'recoil-nexus'

export async function executeCode(code: string, languageId: number) {
  setRecoil(loadingState,true)
  const formData = {
    language_id: languageId,
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
  console.log('token', token)
  const data = await checkStatus(token)
  console.log('data', data)  
  return data
}
