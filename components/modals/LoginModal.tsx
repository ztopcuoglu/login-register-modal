import { useCallback, useState } from "react";
import useLoginModal from "../../hooks/useLoginModal";
import useRegisterModal from "../../hooks/useRegisterModal";
import useToggleTheme from "../../hooks/useToggleTheme";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, loginModal, registerModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            //your sign in method is here
            loginModal.onClose();
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }, [loginModal])

    const bodyContent = (
        <div className=" flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )


    const footerContent = (
        <div className="text-gray-500 dark:text-neutral-400 text-center mt-4">
            <p>First time using? <span onClick={onToggle} className="text-black dark:text-white cursor-pointer hover:underline"> Register </span></p>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={loginModal.isOpen} title="Login" actionLabel="Sign in" onClose={loginModal.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
    )
}
export default LoginModal