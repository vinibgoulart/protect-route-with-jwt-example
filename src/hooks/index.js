import { UserProvider } from './auth';

const AppProvider = ({ children }) => (
    <>
        <UserProvider>{ children }</UserProvider>
    </>
);

export default AppProvider;