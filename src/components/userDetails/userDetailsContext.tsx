import React, { createContext } from "react";

interface UserData {
    email: string;
    password: string;
}

interface Props {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    onChange?: React.FormEventHandler<HTMLInputElement>;
}

const userData: UserData = {
    email: "",
    password: ""
}

const AuthContext = createContext<UserData>(userData);

const UserProvider: React.FC<Props> = ({ children }) => {
    const userData: UserData = {
        email: "Cokitchen222@gmail.co",
        password: "Bigman123"
    }

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}

export { UserProvider, AuthContext };