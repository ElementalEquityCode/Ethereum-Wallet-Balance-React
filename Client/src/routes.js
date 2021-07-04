import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './components/AuthGuard';
import BlogLayout from './components/blog/BlogLayout';
import BrowseLayout from './components/BrowseLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';
import DocsLayout from './components/docs/DocsLayout';
import GuestGuard from './components/GuestGuard';
import LoadingScreen from './components/LoadingScreen';
import MainLayout from './components/MainLayout';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Browse pages

const Browse = Loadable(lazy(() => import('./pages/browse/Browse')));
const BrowseButtons = Loadable(lazy(() => import('./pages/browse/BrowseButtons')));
const BrowseCharts = Loadable(lazy(() => import('./pages/browse/BrowseCharts')));
const BrowseColors = Loadable(lazy(() => import('./pages/browse/BrowseColors')));
const BrowseDetailLists = Loadable(lazy(() => import('./pages/browse/BrowseDetailLists')));
const BrowseForms = Loadable(lazy(() => import('./pages/browse/BrowseForms')));
const BrowseGridLists = Loadable(lazy(() => import('./pages/browse/BrowseGridLists')));
const BrowseGroupedLists = Loadable(lazy(() => import('./pages/browse/BrowseGroupedLists')));
const BrowseInputs = Loadable(lazy(() => import('./pages/browse/BrowseInputs')));
const BrowseModals = Loadable(lazy(() => import('./pages/browse/BrowseModals')));
const BrowseQuickStats = Loadable(lazy(() => import('./pages/browse/BrowseQuickStats')));
const BrowseTables = Loadable(lazy(() => import('./pages/browse/BrowseTables')));
const BrowseTypography = Loadable(lazy(() => import('./pages/browse/BrowseTypography')));

// Authentication pages

const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const PasswordRecovery = Loadable(lazy(() => import('./pages/authentication/PasswordRecovery')));
const PasswordReset = Loadable(lazy(() => import('./pages/authentication/PasswordReset')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));
const VerifyCode = Loadable(lazy(() => import('./pages/authentication/VerifyCode')));

// Blog pages

const BlogPostCreate = Loadable(lazy(() => import('./pages/blog/BlogPostCreate')));
const BlogPostDetails = Loadable(lazy(() => import('./pages/blog/BlogPostDetails')));
const BlogPostList = Loadable(lazy(() => import('./pages/blog/BlogPostList')));

// Dashboard pages

const Account = Loadable(lazy(() => import('./pages/dashboard/Account')));
const Analytics = Loadable(lazy(() => import('./pages/dashboard/Analytics')));
const Calendar = Loadable(lazy(() => import('./pages/dashboard/Calendar')));
const Chat = Loadable(lazy(() => import('./pages/dashboard/Chat')));
const CustomerDetails = Loadable(lazy(() => import('./pages/dashboard/CustomerDetails')));
const CustomerEdit = Loadable(lazy(() => import('./pages/dashboard/CustomerEdit')));
const CustomerList = Loadable(lazy(() => import('./pages/dashboard/CustomerList')));
const Finance = Loadable(lazy(() => import('./pages/dashboard/Finance')));
const InvoiceDetails = Loadable(lazy(() => import('./pages/dashboard/InvoiceDetails')));
const InvoiceList = Loadable(lazy(() => import('./pages/dashboard/InvoiceList')));
const Kanban = Loadable(lazy(() => import('./pages/dashboard/Kanban')));
const Mail = Loadable(lazy(() => import('./pages/dashboard/Mail')));
const OrderDetails = Loadable(lazy(() => import('./pages/dashboard/OrderDetails')));
const OrderList = Loadable(lazy(() => import('./pages/dashboard/OrderList')));
const Overview = Loadable(lazy(() => import('./pages/dashboard/Overview')));
const ProductCreate = Loadable(lazy(() => import('./pages/dashboard/ProductCreate')));
const ProductList = Loadable(lazy(() => import('./pages/dashboard/ProductList')));

// Docs pages

const Docs = Loadable(lazy(() => import('./pages/Docs')));

// Error pages

const AuthorizationRequired = Loadable(lazy(() => import('./pages/AuthorizationRequired')));
const NotFound = Loadable(lazy(() => import('./pages/NotFound')));
const ServerError = Loadable(lazy(() => import('./pages/ServerError')));

// Projects pages

const ProjectBrowse = Loadable(lazy(() => import('./pages/dashboard/ProjectBrowse')));
const ProjectCreate = Loadable(lazy(() => import('./pages/dashboard/ProjectCreate')));
const ProjectDetails = Loadable(lazy(() => import('./pages/dashboard/ProjectDetails')));

// Social pages

const SocialFeed = Loadable(lazy(() => import('./pages/dashboard/SocialFeed')));
const SocialProfile = Loadable(lazy(() => import('./pages/dashboard/SocialProfile')));

// Other pages

const Checkout = Loadable(lazy(() => import('./pages/Checkout')));
const Contact = Loadable(lazy(() => import('./pages/Contact')));
const Home = Loadable(lazy(() => import('./pages/Home')));
const Pricing = Loadable(lazy(() => import('./pages/Pricing')));

const routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      },
      {
        path: 'login-unguarded',
        element: <Login />
      },
      {
        path: 'password-recovery',
        element: <PasswordRecovery />
      },
      {
        path: 'password-reset',
        element: <PasswordReset />
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        )
      },
      {
        path: 'register-unguarded',
        element: <Register />
      },
      {
        path: 'verify-code',
        element: <VerifyCode />
      }
    ]
  },
  {
    path: 'blog',
    element: <BlogLayout />,
    children: [
      {
        path: '/',
        element: <BlogPostList />
      },
      {
        path: 'new',
        element: <BlogPostCreate />
      },
      {
        path: ':postId',
        element: <BlogPostDetails />
      }
    ]
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'dashboard',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'account',
        element: <Account />
      },
      {
        path: 'analytics',
        element: <Analytics />
      },
      {
        path: 'calendar',
        element: <Calendar />
      },
      {
        path: 'chat',
        children: [
          {
            path: '/',
            element: <Chat />
          },
          {
            path: 'new',
            element: <Chat />
          },
          {
            path: ':threadKey',
            element: <Chat />
          }
        ]
      },
      {
        path: 'customers',
        children: [
          {
            path: '/',
            element: <CustomerList />
          },
          {
            path: ':customerId',
            element: <CustomerDetails />
          },
          {
            path: ':customerId/edit',
            element: <CustomerEdit />
          }
        ]
      },
      {
        path: 'invoices',
        children: [
          {
            path: '/',
            element: <InvoiceList />
          },
          {
            path: ':invoiceId',
            element: <InvoiceDetails />
          }
        ]
      },
      {
        path: 'kanban',
        element: <Kanban />
      },
      {
        path: 'mail',
        children: [
          {
            path: '/',
            element: (
              <Navigate
                to="/dashboard/mail/all"
                replace
              />
            )
          },
          {
            path: 'label/:customLabel',
            element: <Mail />
          },
          {
            path: 'label/:customLabel/:emailId',
            element: <Mail />
          },
          {
            path: ':systemLabel',
            element: <Mail />
          },
          {
            path: ':systemLabel/:emailId',
            element: <Mail />
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '/',
            element: <OrderList />
          },
          {
            path: ':orderId',
            element: <OrderDetails />
          }
        ]
      },
      {
        path: 'finance',
        element: <Finance />
      },
      {
        path: 'products',
        children: [
          {
            path: '/',
            element: <ProductList />
          },
          {
            path: 'new',
            element: <ProductCreate />
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: 'browse',
            element: <ProjectBrowse />
          },
          {
            path: 'new',
            element: <ProjectCreate />
          },
          {
            path: ':projectId',
            element: <ProjectDetails />
          }
        ]
      },
      {
        path: 'social',
        children: [
          {
            path: 'feed',
            element: <SocialFeed />
          },
          {
            path: 'profile',
            element: <SocialProfile />
          }
        ]
      }
    ]
  },
  {
    path: 'docs',
    element: <DocsLayout />,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/docs/overview/welcome"
            replace
          />
        )
      },
      {
        path: '*',
        element: <Docs />
      }
    ]
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'browse',
        element: <BrowseLayout />,
        children: [
          {
            path: '/',
            element: <Browse />
          },
          {
            path: '/buttons',
            element: <BrowseButtons />
          },
          {
            path: '/inputs',
            element: <BrowseInputs />
          },
          {
            path: '/charts',
            element: <BrowseCharts />
          },
          {
            path: '/colors',
            element: <BrowseColors />
          },
          {
            path: '/data-display/detail-lists',
            element: <BrowseDetailLists />
          },
          {
            path: '/data-display/quick-stats',
            element: <BrowseQuickStats />
          },
          {
            path: '/data-display/tables',
            element: <BrowseTables />
          },
          {
            path: '/forms',
            element: <BrowseForms />
          },
          {
            path: '/modals',
            element: <BrowseModals />
          },
          {
            path: '/lists/grouped-lists',
            element: <BrowseGroupedLists />
          },
          {
            path: '/lists/grid-lists',
            element: <BrowseGridLists />
          },
          {
            path: '/typography',
            element: <BrowseTypography />
          }
        ]
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: '401',
        element: <AuthorizationRequired />
      },
      {
        path: '404',
        element: <NotFound />
      },
      {
        path: '500',
        element: <ServerError />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
