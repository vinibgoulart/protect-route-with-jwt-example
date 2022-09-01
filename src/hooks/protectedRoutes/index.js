import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../auth';

export default function ProtectedRoutes() {
    const { cookies } = useAuth();

    return cookies.token ? <Outlet/> : <Navigate to='/login' exact />
}