import React from 'react';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

type Props = {
  title: string;
  children?: React.ReactChild | React.ReactChild[];
};

export function Layout({ title, children }: Props) {
  return (
    <React.Fragment>
      {/* Navigation bar on top of screen */}
      <Navbar title={title} />
      {/* Main content */}
      <main className="max-w-screen-lg mx-auto">{children}</main>
      {/* Author  */}
      <Footer author="Phanuwat Phalad" />
    </React.Fragment>
  );
}
