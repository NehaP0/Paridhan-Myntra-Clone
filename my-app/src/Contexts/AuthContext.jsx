import React from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const[isAuth, SetisAuth] = useState(false)
    const[token, SetToken] = useState("")
    const[AddtoCart, SetAddtoCart] = useState([])
    const [Kurtas, SetKurtas] = useState([])
    const[change, Setchange] = useState(false)
   
   
    

  return (
    <AuthContext.Provider value={{isAuth, SetisAuth, token, SetToken,AddtoCart, SetAddtoCart,Kurtas, SetKurtas,change, Setchange} }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider