import { useCallback, useState } from "react";

import useLoginModal from "../../hooks/useLoginModal"
import useRegisterModal from "../../hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setusername] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        registerModal.onClose();
        loginModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            //Register and login
            console.log(email)
            console.log(password)
            console.log(username)
            console.log(name)
            registerModal.onClose();
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }, [registerModal, email, password, username, name])

    const bodyContent = (
        <div className=" flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled={isLoading} />
            <Input placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} disabled={isLoading} />
            <Input placeholder="username" onChange={(e) => setusername(e.target.value)} value={username} disabled={isLoading} />
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} disabled={isLoading} />
        </div>
    )

    const footerContent = (
        <div className="text-gray-500 dark:text-neutral-400 text-center mt-4">
            <p>Already have an account? <span onClick={onToggle} className="text-black dark:text-white cursor-pointer hover:underline"> Sign in</span></p>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={registerModal.isOpen} title="Create an account" actionLabel="Register" onClose={registerModal.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
    )
}
export default RegisterModal