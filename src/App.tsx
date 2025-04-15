import { useEffect } from "react"
import { useAuth } from "./hooks/auth"

const App = () => {

  const { handleAuthenticateUser } = useAuth()

  useEffect(() => {
    handleAuthenticateUser()
  }, [])

  return (
    <div>
      ...
    </div>
  )
}

export default App