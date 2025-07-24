import {createContext, useState} from 'react'
import {useContext} from 'react'

// create the Context

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedin,setIsLoggedin] = useState(
    // note -> for !! converts to true or false

    !!localStorage.getItem('accessToken')

  )
  const [theme,setTheme]=useState('light')

  return (
    <AuthContext.Provider value={{isLoggedin, setIsLoggedin,theme ,setTheme}}>
      {children}
    </AuthContext.Provider>
    
  )
}

export default AuthProvider
export {AuthContext}