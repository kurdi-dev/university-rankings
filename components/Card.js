import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Card = ({ children, title, text, useDefaultText, ...rest }) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  return (
    <Box
      d='flex'
      flexDirection='column'
      w='auto'
      roundedTop='lg'
      bg={bgColor}
      // overflow="hidden"
      boxShadow='0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'
      pos='relative'
      roundedBottom='lg'
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Card;
