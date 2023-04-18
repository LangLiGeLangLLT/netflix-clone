import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default function Profiles() {
  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  )
}
