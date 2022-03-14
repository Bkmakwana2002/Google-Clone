import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
 
    const links = [
        { url: '/search', text: '🔎 All' },
        { url: '/news', text: '📰 News' },
        { url: '/images', text: '📸 Images' },
      ];

  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
        {links.map(({ url, text },index) => (
      <NavLink key={ index } to={url} className="m-2 mb-0 focus:text-blue-700 focus:border-b-2 focus:dark:text-blue-300 focu:border-blue-700 focus:pb-2">{text}</NavLink>
    ))}
    </div>
  )
}

export default Links