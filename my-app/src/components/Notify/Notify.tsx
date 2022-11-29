import React, { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Notify.scss';

const Notify: FC = () => {
  return (
    <ToastContainer  autoClose={2000}/>
  );
};
export default Notify;
