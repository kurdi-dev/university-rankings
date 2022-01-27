import React from 'react';
import Link from 'next/link';
import {
  chakra,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Spacer,
  Icon,
  Square,
} from '@chakra-ui/react';

const links = [
  { name: 'home', url: '/', icon: <AiFillHome /> },
  { name: 'rankings', url: '/rankings', icon: <AiFillHome /> },
  { name: 'citation', url: '/citaion', icon: <AiFillHome /> },
];
import { useViewportScroll } from 'framer-motion';

import { IoIosArrowDown } from 'react-icons/io';
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill, BsGithub } from 'react-icons/bs';
import { FaMoon, FaSun, FaUniversity } from 'react-icons/fa';
import LangSwitcher from './LangSwitcher';

export default function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('white', 'gray.800');
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const openGithubRepo = () => {
    window.open('https://github.com/kurdi-dev/university-rankings', '_blank');
  };

  const cl = useColorModeValue('gray.800', 'white');
  const mobileNav = useDisclosure();

  const MobileNavContent = (
    <VStack
      pos='absolute'
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection='column'
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded='sm'
      shadow='sm'
    >
      <CloseButton
        aria-label='Close menu'
        justifySelf='self-start'
        onClick={mobileNav.onClose}
      />
      {links.map((link, index) => (
        <Link href={link.url} key={index} passHref>
          <Button w='full' as='a' variant='ghost' leftIcon={link.icon}>
            {link.name}
          </Button>
        </Link>
      ))}
      <Button
        w='full'
        variant='ghost'
        leftIcon={<BsGithub />}
        onClick={openGithubRepo}
      >
        Open in Github
      </Button>
      <LangSwitcher />
    </VStack>
  );
  return (
    <React.Fragment>
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition='box-shadow 0.2s'
        bg={bg}
        borderTop='6px solid'
        borderTopColor='brand.400'
        w='full'
        overflowY='hidden'
      >
        <chakra.div h='4.5rem' mx='auto' maxW='1200px'>
          <Flex
            w='full'
            h='full'
            px='6'
            alignItems='center'
            justifyContent='space-between'
          >
            <Flex align='flex-start' me={1}>
              <Link href='/' passHref>
                <Square p={1} as='a'>
                  <Icon h={6} w={6} as={FaUniversity} />
                </Square>
              </Link>
            </Flex>
            <Flex>
              <HStack spacing='5' display={{ base: 'none', md: 'flex' }}>
                {links.map((link, index) => (
                  <Link href={link.url} key={index} passHref>
                    <Button
                      as='a'
                      bg={bg}
                      color='gray.500'
                      display='inline-flex'
                      alignItems='center'
                      fontSize='md'
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
              </HStack>
            </Flex>
            <Spacer />
            <Flex
              justify='flex-end'
              align='center'
              color='gray.800'
              _dark={{ color: 'gray.300' }}
            >
              <Box display={{ base: 'none', md: 'flex' }}>
                <LangSwitcher />
              </Box>
              <IconButton
                size='md'
                fontSize='lg'
                aria-label={`Switch to ${text} mode`}
                variant=''
                color='current'
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'none', md: 'flex' }}
                size='md'
                fontSize='lg'
                aria-label={`Open github repository`}
                variant='ghost'
                color='current'
                ml={{ base: '0', md: '3' }}
                onClick={openGithubRepo}
                icon={<BsGithub />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color={useColorModeValue('gray.800', 'inherit')}
                variant='ghost'
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </React.Fragment>
  );
}
