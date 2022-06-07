import axios, { AxiosRequestConfig } from 'axios'
import { resultState } from '../appContext'
import { setRecoil } from 'recoil-nexus'

export const checkStatus = async (token: string) => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: import.meta.env.VITE_BASEURL + '/submissions/' + token,
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
      setRecoil(resultState, response.data)
    }
  } catch (err) {
    console.log('err', err)
  }
}
