import React from 'react';
import Link from './Link';

const navigationData = [
    {
        "id": 1,
        "name": "Google",
        "path": "https://www.google.com"
    },
    {
        "id": 2,
        "name": "GitHub",
        "path": "https://github.com"
    },
    {
        "id": 3,
        "name": "LinkedIn",
        "path": "https://www.linkedin.com"
    },
    {
        "id": 4,
        "name": "YouTube",
        "path": "https://www.youtube.com"
    },
    {
        "id": 5,
        "name": "Stack Overflow",
        "path": "https://stackoverflow.com"
    }
]

const NavBar = () => {
    return (
        <nav>
            <ul className='flex'>
                {
                    navigationData.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul>
                {
                    navigationData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

        </nav>
    );
};

export default NavBar;