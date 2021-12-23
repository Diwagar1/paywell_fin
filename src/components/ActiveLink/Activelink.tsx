import React from 'react'
import { useRouter } from 'next/router'

export default function Activelink({router,href}) {
    const handleClick = (e)=>{
        e.preventDefault()
        router.push(href)
    }
    const currentPath = router.pathname === href || router.asPath
    return (
        <div>
            <a href={href} onClick={handleClick} style={{color: currentPath ? "main" : 'black' }}>

            </a>
        </div>
    )
}
