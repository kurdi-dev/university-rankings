import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Center, Spacer, Select, Icon } from '@chakra-ui/react';
import { FiGlobe } from 'react-icons/fi';

function LangSwitcher() {
  const router = useRouter();
  const [localeValue, setLocaleValue] = useState(router.locale || 'en');
  const handleLanguageChange = async (e) => {
    const language = e.target.value;
    setLocaleValue(language);
    await router.push('/', '/', { locale: language });
    router.reload();
  };

  return (
    <Flex direction='row' maxW={150}>
      <Center mx={2}>
        <Icon w={5} h={5} as={FiGlobe} />
      </Center>
      <Spacer />
      <Select
        name='language'
        size='sm'
        onChange={handleLanguageChange}
        id='lang'
        value={localeValue}
      >
        <option value='en'>English</option>
        <option value='ckb'>کوردی</option>
        <option value='ar'>العربیە</option>
      </Select>
    </Flex>
  );
}

export default LangSwitcher;
