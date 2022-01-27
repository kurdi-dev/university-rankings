import { useColorMode, Button, Square } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function ColorModeChanger() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Square size={6}>
      <Button onClick={toggleColorMode}>
        {colorMode == 'light' ? (
          <SunIcon w={6} h={6} />
        ) : (
          <MoonIcon w={6} h={6} />
        )}
      </Button>
    </Square>
  );
}

export default ColorModeChanger;
