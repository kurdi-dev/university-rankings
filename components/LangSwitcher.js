import { useRouter } from 'next/router';

function LangSwitcher() {
  const { locale, push, reload, pathname } = useRouter();
  const nextLocale = locale === 'en' ? 'ku' : 'en';
  console.log(locale);

  const onClick = async () => {
    await push(pathname, { locale: nextLocale });
    console.log('next lang: ', nextLocale);
    // force a reload for it to work correctly.
    reload();
  };

  return <button onClick={onClick}>Change to {nextLocale}</button>;
}

export default LangSwitcher;
