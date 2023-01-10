import useSWR from 'swr'
import { useSelector } from 'react-redux'

import { API_URL } from 'utils/utils'

function useApi(path) {
  const accessToken = useSelector((store) => store.user.accessToken)

  const {
    data, error, isValidating, mutate, isLoading,
  } = useSWR(
    !path ? null : `${API_URL}${path}`,

    async (url) => {
      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: 'application/json',
        },
      });

      if (res.statusCode === 400) {
        console.error('Not logged in')
        throw new Error('NOT_LOGGED_IN_TO_API')
      }

      return res.json();
    },
  );
  return {
    data, error, isValidating, mutate, isLoading,
  };
}

export default useApi
