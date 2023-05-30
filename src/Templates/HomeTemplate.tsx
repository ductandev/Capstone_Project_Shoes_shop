// tsrfc
import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

type Props = {}

const HomeTemplate: React.FC = ({ }: Props): JSX.Element => {
  return (
    <>
        <Header></Header>
        <div className="content-layout" style={{minHeight:'80vh'}}></div>
        <Outlet></Outlet>

        <footer className='bg-dark text-white text-center'>
            Footer
        </footer>
    </>
  )
}