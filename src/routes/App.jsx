// import React from 'react';
// import '../styles/global.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from '../containers/Layout';
// import CreatePassword from '../templates/CreatePassword';
// import CreateAccount from '../templates/CreateAccount';
// import SendEmail from '../templates/SendEmail';
// import AccountEdit from '../templates/AccountEdit';
// import Home from '../templates/Home';
// import NotFound from '../templates/NotFound';
// import Login from '../templates/Login';
// import MyOrder from '../templates/MyOrder';
// import Orders from '../templates/Orders';
// import RecoveryPassword from '../templates/RecoveryPassword';
// import AppContext from '../context/AppContext';
// import useInitialState from '../hooks/useInitialState';

// const App = () => {
//   const initialState = useInitialState();
//   return (
//     <AppContext.Provider value={initialState}>
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/create-password" element={<CreatePassword />} />
//             <Route path="/send-email" element={<SendEmail />} />
//             <Route path="/recovery-password" element={<RecoveryPassword />} />
//             <Route path="/checkout" element={<MyOrder />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/" element={<Home />} />
//             <Route path="*" element={<NotFound />} />
//             <Route path="/edit-account" element={<AccountEdit />} />
//             <Route path="/create-account" element={<CreateAccount />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </AppContext.Provider>
//   );
// };

// export default App;
