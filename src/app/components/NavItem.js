'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import "../globals.css"
import "./navbar.css"
const NavItem = ({ href, className,children }) => {
    const pathname = usePathname()
    // if (pathname != href)
        return (
            <Link href={href} className={className}>
                {
                    children
                }</Link>
        );
    // else return (
    // <div href={href} className={className}>
    // {
    //     children
    // }
    // </div>
    // )
}

export default NavItem;