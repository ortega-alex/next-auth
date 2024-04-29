import { getSession, signOut } from 'next-auth/react'
import React from 'react'

function HomePage({ session }) {
  return (
    <div>
      <h1>{session.user?.name}</h1>
      <p>{session.user?.email}</p>
      <img src={session.user?.image} alt="logo" />
      <button onClick={signOut}>Logout</button>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }
}

export default HomePage