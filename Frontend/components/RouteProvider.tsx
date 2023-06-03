import { useRouter } from "next/router";
import { useEffect } from "react";

const RouteProvider = ({ children }) => {
    const router  = useRouter();

    useEffect(() => {
        const autenticatedUser = localStorage.getItem("logueado")
        if(autenticatedUser != null){
            if(autenticatedUser == "false"){
                router.push('/');
            }
        else{
            router.push('/')
        }
        }
    }, [])
    return children
}


export default RouteProvider