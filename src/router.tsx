import {
  createRouter,
  createRootRoute,
  createRoute,
  RouterProvider,
} from '@tanstack/react-router';
import App from './App';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ChatRoom from './pages/ChatRoom';

const rootRoute = createRootRoute({
    component: App,
});

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
});

const registerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/register',
    component: RegisterPage,
});

const dashboardRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Dashboard,
});

const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat/$id',
  component: ChatRoom,
});

const routeTree = rootRoute.addChildren([loginRoute, registerRoute, dashboardRoute, chatRoute]);

export const router = createRouter({  routeTree });
export const Router = () => {
  return <RouterProvider router={router} />;
}
