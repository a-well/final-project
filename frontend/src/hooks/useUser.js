import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useUser = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user.user)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return { user }
}

export default useUser
