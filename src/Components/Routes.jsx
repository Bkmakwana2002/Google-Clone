import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Result from './Result'

const Navigation = () => {
  return (
    <div className="p-4">
        <Routes>
          <Route path="/" element={<Navigate to="/search" />}/>
          <Route path="/search" element={<Result/>}/>
          <Route path="/images" element={<Result/>}/>
          <Route path="/news" element={<Result/>}/>
          <Route path="/videos" element={<Result/>}/>
        </Routes>
    </div>
  )
}

export default Navigation