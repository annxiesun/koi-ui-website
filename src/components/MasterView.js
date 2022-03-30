
import React, { FunctionComponent } from 'react';
import Header from './content/Header';
import './MasterView.css';


function MasterView({ }) {
  const menuItems = [
    { label: 'Why Me?', id: 'about-me' },
    { label: 'My Work', id: 'work' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact Me', id: 'contact' }];

  return (
    <Header />
  );
}

export default MasterView;