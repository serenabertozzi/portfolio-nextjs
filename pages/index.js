import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="blue" p={3} mb={6} align="center">
        Hello I&apos;m a full-stack developer based in London, UK!
      </Box>
      <Box display={{ md: 'flex' }} align="center">
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Serena Bertozzi
          </Heading>
          <p>Developer | Makers graduate | Content Creator</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
