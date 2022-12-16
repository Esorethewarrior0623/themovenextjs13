'use client'
import React from 'react'
import Button from './button'
import {useRouter} from 'next/navigation'

const Home = () => {

const router = useRouter();
const hold = () => {
  router.push('/signin')
}
  return (
<div>
      <h1>This is the home page</h1>
      <Button text='Sign In' onClick={hold} role='submit'/>
</div>
  )
}

export default Home