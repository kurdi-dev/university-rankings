import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW='container.lg'
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify='center'
        align={{ base: 'center', md: 'center' }}
      >
        <Text>
          © {new Date().getFullYear()} Iraq University Rankings, Built with{' '}
          <Icon as={FaHeart} color='red.500' /> by{' '}
          <Link href='https://kurdi.dev' isExternal>
            Kurdi-Dev
          </Link>
        </Text>
      </Container>
    </Box>
  );
}
