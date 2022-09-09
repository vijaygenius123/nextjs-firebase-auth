import {useEffect} from "react";
import {useAuth} from "../context/AuthContext";
import {useRouter} from "next/router";


export default function ProtectedRoute({children}) {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
            const {pathname} = router
            if (!user) router.push({
                pathname: '/',
                query: {from: pathname},
            })
        },
        [user, router])

    console.log(user)
    return <>{user ? children : null}</>
}
