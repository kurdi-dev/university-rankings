import {
  chakra,
  Box,
  useColorModeValue,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box pos='relative' overflow='hidden' mt={10}>
      <Box maxW='7xl' mx='auto'>
        <Box
          pos='relative'
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w={{ lg: 'full' }}
          zIndex={1}
          border='solid 1px transparent'
        >
          <Box
            mx='auto'
            maxW={{ base: '7xl' }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w='full'
              textAlign='center'
              justifyContent='center'
              alignItems='center'
            >
              <chakra.h1
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                letterSpacing='tight'
                lineHeight='short'
                fontWeight='extrabold'
                color={useColorModeValue('gray.900', 'white')}
              >
                <chakra.span display={{ base: 'block', xl: 'inline' }}>
                  Iraqi University Rankings based on{' '}
                </chakra.span>
                <chakra.span
                  display={{ base: 'block', xl: 'inline' }}
                  color={useColorModeValue('teal.600', 'teal.400')}
                >
                  Webometric
                </chakra.span>
              </chakra.h1>
              <Text
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: 'lg', md: 'xl' }}
                maxW={{ sm: 'xl' }}
                mx='auto'
                color='gray.500'
                textAlign='center'
                as='p'
              >
                All the rankings and information that is presented on this
                website are imported from the Webonetric website, it is
                presented in a way that is more convenient to filter and use by
                the KRG and Iraqi universities academic staff.
              </Text>
              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: 'flex' }}
                justifyContent='center'
                fontWeight='extrabold'
              >
                <Box rounded='full' shadow='md'>
                  <Button
                    colorScheme='teal'
                    size='xl'
                    w='full'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    border='solid 1px transparent'
                    fontSize={{ base: 'md', md: 'lg' }}
                    rounded='md'
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    cursor='pointer'
                  >
                    University Rankings
                  </Button>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <Button
                    // colorScheme='blackAlpha'
                    colorScheme='teal'
                    variant='outline'
                    size='xl'
                    w='full'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    px={{ base: 8, md: 10 }}
                    py={{ base: 3, md: 4 }}
                    border='solid 1px transparent'
                    fontSize={{ base: 'md', md: 'lg' }}
                    rounded='md'
                    cursor='pointer'
                  >
                    Citations Rankings
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        border='solid 1px transparent'
      >
        <Image
          h={275}
          w='full'
          fit='cover'
          src='/images/hero.png'
          alt='graduation'
          loading='lazy'
        />
      </Box>
    </Box>
  );
}
