import { useSelector } from 'react-redux'
import useSWRMutation from 'swr/mutation'

import { API_URL } from 'utils/utils'

const deleteApi = (path) => {
  const accessToken = useSelector((store) => store.user.accessToken)

  const sendRequest = async (url) => {
    const res = await fetch(url, {
      method: 'DELETE',
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

export default deleteApi
