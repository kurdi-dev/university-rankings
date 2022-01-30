import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Card = ({ children, title, text, useDefaultText, ...rest }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  return (
    <Box
      d='flex'
      flexDirection='column'
      w='auto'
      borderRadius='xl'
      bg={bgColor}
      // overflow="hidden"
      shadow='base'
      pos='relative'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
