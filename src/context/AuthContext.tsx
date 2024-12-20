import { User } from "@supabase/supabase-js";
import { useState, createContext, useContext } from "react";

interface AuthContextProps {
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ( { children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);

    const setAuth = (authUser: User | null) => {
        setUser(authUser);
    }

    return (
        <AuthContext.Provider value={{ user, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
}