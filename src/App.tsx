import React from 'react';
import { Route } from 'react-router';
import { Layout, Authentication } from './components';
import { Home } from './components/Home';

import './custom.css'
import Login from './components/pages/Login/Login';
import Contact from './components/pages/Contact/Contact';
import { AppContextProvider } from './components/core/contexts/app-context/appContext';
import CreateAccount from './components/pages/Account/CreateAccount';
import ConfirmAccountPage from './components/pages/Account/ConfirmAccountPage';

const MainLayout = () => (
  <Layout>
    <Authentication>
      <Route path='/home/contact' element={<Contact />} />
    </Authentication>
  </Layout>);



const App = () => (
  <AppContextProvider>
    <Route path='/login' element={<Login />} />
    <Route path='/createAccount' children={<CreateAccount />} />
    <Route path="/confirmAccount/:accountCode" children={<ConfirmAccountPage />} />
    <Route path='/home/' element={<MainLayout />} ></Route>
    <Layout>
      <Route path='/' element={ <Home />} />
    </Layout>
  </AppContextProvider>
)

export default App;