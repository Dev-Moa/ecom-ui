import { Container, Flex } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Flex direction="column" mih="12rem" >
      <Navbar />
      <Container
        mih="100vh"
        fluid
      >
        <Outlet />
      </Container>
      <Footer />
    </Flex>
    </>
  )
}

export default App