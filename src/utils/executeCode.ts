import axios from 'axios'
import { checkStatus } from './checkStatus'
import { loadingState } from '../appContext'
import { setRecoil } from 'recoil-nexus'

export async function executeCode(code: string, languageId: number) {
  try {
    setRecoil(loadingState, true)
    const formData = {
      language_id: languageId,
      // encode source code in base64
      source_code: btoa(code)
    }
    const options = {
      method: 'POST',
      url: import.meta.env.VITE_BASEURL + '/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      data: formData
    }
    const token = await (await axios.request(options)).data.token
    const data = await checkStatus(token)
    return data
  } catch (error) {
    console.error(error)
    setRecoil(loadingState, false)
  }
}
