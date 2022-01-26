import { Heading, Stack } from '@chakra-ui/react';
import ColorModeChanger from '../components/ColorModeChanger';
import LangSwitcher from '../components/LangSwitcher';
export default function Home() {
  return (
    <Stack>
      <Heading as='h1' size='4xl' isTruncated>
        (4xl) In love with React & Next
      </Heading>
      <ColorModeChanger />
      <LangSwitcher />
    </Stack>
  );
}
