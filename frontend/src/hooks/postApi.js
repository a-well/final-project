import useSWR from 'swr'
import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'

const API_BASE_URL = 'http://localhost:8080'

function postApi(path, data) {
  const accessToken = useSelector((store) => store.user.accessToken)

  const sendRequest = async (url, { arg }) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(arg),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },

    })

    return res.json()
  }
  return useSWRMutation(!path ? null : `${API_BASE_URL}${path}`, sendRequest)
}

export default postApi