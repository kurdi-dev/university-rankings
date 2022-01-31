import React from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Button,
  Link,
} from '@chakra-ui/react';

import { FaGithub } from 'react-icons/fa';

export default function Contribute() {
  return (
    <Flex p={50} w='full' alignItems='center' justifyContent='center'>
      <Box>
        <Box
          maxW='container.lg'
          w={{ md: '3xl', lg: '4xl' }}
          mx='auto'
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: 'flex' }}
          alignItems={{ lg: 'center' }}
          justifyContent={{ lg: 'space-between' }}
        >
          <chakra.h2
            fontSize={{ base: '3xl', sm: '4xl' }}
            fontWeight='extrabold'
            letterSpacing='tight'
            lineHeight='shorter'
            color={useColorModeValue('gray.900', 'gray.100')}
          >
            <chakra.span display='block'>
              This website is Open Source!
            </chakra.span>
            <chakra.span display='block' color='teal.500'>
              Feel free to contribute to it.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            mt={{ base: 8, lg: 0 }}
            shrink={{ lg: 0 }}
          >
            <Link
              href='https://github.com/kurdi-dev/university-rankings'
              isExternal
            >
              <Button
                w={['full', , 'auto']}
                leftIcon={<FaGithub />}
                size='lg'
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
                px={5}
                py={3}
                border='solid transparent'
                fontWeight='bold'
                rounded='md'
                shadow='md'
              >
                Github Repo
              </Button>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
}
