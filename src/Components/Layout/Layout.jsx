import React from 'react'
import Nav from './../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

export default function Layout() {
  return <>
  <Nav/>
  <Outlet/>
  </>
}
