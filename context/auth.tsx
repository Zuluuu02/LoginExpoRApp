import { useRouter, useSegments } from "expo-router";
import React, { FC, ReactNode } from "react";

export type UserCredentials = {
  email: string;
  password: string;
};

type CredentialsContext = {
  signIn: (userCredentials: UserCredentials) => void;
  signOut: () => void;
  user: UserCredentials | null;
};

type AuthProviderProps = {
  userCredentials: UserCredentials | null;
  children?: ReactNode;
};

const AuthContext = React.createContext<CredentialsContext>({
  signIn: () => {},
  signOut: () => {},
  user: null,
});

export function useAuth() {
  return React.useContext(AuthContext);
}

function useProtectedRoute(user: UserCredentials | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    console.log({ user, segments });
    if (
  
      !user &&
      !inAuthGroup
    ) {
      
      router.replace("/login");
    } else if (user && (inAuthGroup || segments[0] === "[...404]")) {

      router.replace("/main");
    }
  }, [user, segments]);
}

export const Provider: FC<AuthProviderProps> = (props) => {
  const [user, setAuth] = React.useState<UserCredentials | null>(
    props.userCredentials
  );

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{
        signIn: (userCredentials: UserCredentials) => setAuth(userCredentials),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
