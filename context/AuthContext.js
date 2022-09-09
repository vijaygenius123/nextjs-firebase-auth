import {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase/firebaseApp";
import {useRouter} from "next/router";

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)


export const AuthContextProvider = ({children}) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log(user)
                    console.log(router)
                    if (router.query && router.query.from) {
                        console.log(router)
                        const {query: {from}} = router
                        router.push(from)
                    }
                    setUser({
                        uid: user.uid,
                        accessToken: user.accessToken
                    })

                } else {
                    setUser(null)
                }
            })
            return () => unsubscribe()

        }, [router]
    )

    return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>

}
