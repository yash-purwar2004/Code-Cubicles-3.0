import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section>
        <div className='h-screen flex items-center justify-center'>
            {children}
        </div>
    </section>
  )
}

export default AuthLayout