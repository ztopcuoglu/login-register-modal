import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react';
import Button from '../components/Button'
import useLoginModal from '../hooks/useLoginModal';
import useRegisterModal from '../hooks/useRegisterModal';
import useToggleTheme from '../hooks/useToggleTheme';
import { applyThemePreference } from "../utils/themeUtil"
import { BsFillMoonFill, BsGithub, BsSun } from "react-icons/bs"
import Link from 'next/link';
const Home: NextPage = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const themeController = useToggleTheme();
  useEffect(() => {
    const theme = themeController.isDark ? "dark" : "light"
    applyThemePreference(theme);
  }, [themeController.isDark]);

  const openModal = (type: string) => {
    switch (type) {
      case "login": {
        loginModal.onOpen()
        return;
      }
      case "register": {
        registerModal.onOpen()
        return;
      }
      default: {
        throw new Error(`invalid modal name ${type}`)
      }
    }
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <Head>
        <title>Login/Register</title>
        <meta name="description" content="Login/Register Modals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex items-center justify-center gap-5 mt-5'>
        <Button label='Login' onClick={() => openModal("login")} />
        <Button label='Register' onClick={() => openModal("register")} secondary />
        <div className="flex flex-col gap-1 p-1 items-center justify-center hover:cursor-pointer hover:scale-110 transition duration-150 " onClick={themeController.toggle}>
          {themeController.isDark ? <BsSun size={20} color="white" /> : <BsFillMoonFill size={20} />}
          <span className='dark:text-white text-black'>Change Theme</span>
        </div>
      </div>
      <Link href='https://github.com/ztopcuoglu/login-register-modal' className='flex items-center  flex-col hover:scale-110 transition duration-150 mt-3'>
        <BsGithub size={30} color={`${themeController.isDark ? "white" : "black"}`} />
        <p className='dark:text-white text-black '>Visit Github link to check the source</p>
      </Link>
    </div>
  )
}

export default Home
