import { Body, Container, Html, Link, Preview, Tailwind, Text } from '@react-email/components'
import React, { CSSProperties } from 'react'


const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>
            Welcome to our platform!
        </Preview>
        <Tailwind>
        <Body className='bg-white' >
            <Container>
            <Text className='bold text-3xl'>Welcome to our platform {name}!</Text>
            <Link href="https://example.com">Click here to login</Link>
            </Container>
        </Body>
        </Tailwind>
        
    </Html>
    
  )
};


export default WelcomeTemplate