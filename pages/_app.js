import '../styles/globals.css'
import {AuthContextProvider} from "../context/AuthContext";
import {useRouter} from "next/router";
import ProtectedRoute from "../compononents/ProtectedRoute";

const noAuthRequired = ['/']

function MyApp({Component, pageProps}) {
    const router = useRouter()


    return <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
        ) : <ProtectedRoute>
            <Component {...pageProps} />
        </ProtectedRoute>
        }
    </AuthContextProvider>
}

export default MyApp
