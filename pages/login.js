import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

function Login() {
    const router = useRouter()
    const { status } = useSession()

    if (status !== 'loading' && status === 'authenticated') router.push('/')

    // useEffect(() => {
    //   (async () => {
    //     const providers = await getProviders() // obtine los proveedores
    //     console.log(providers) 
    //   })()
    // }, [])    

    return (
        <div>
            <button onClick={() => signIn('github')}>
                Signin with Github
            </button>
        </div>
    )
}

export default Login