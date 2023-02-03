import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'

import { API_URL } from 'utils/utils'

const patchApi = (path) => {
  const accessToken = useSelector((store) => store.user.accessToken)

  const sendRequest = async (url, { arg }) => {
    const res = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(arg),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },

    })

    return res.json()
  }
  return useSWRMutation(!path ? null : `${API_URL}${path}`, sendRequest)
}

export default patchApi
