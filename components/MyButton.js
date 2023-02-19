import Link from "next/link";
import Image from 'next/image'

const  MyButton = ({ href, variant = 'primary', children, appendClass }) =>{
    let className = `text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
    dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.4 text-center mr-2 mb-2`
    if (appendClass) className += ' ' + appendClass;

    return href
        ? <Link className={className} href={href}>{children}</Link>
        : <button type="button" className={className}>{children}</button>
}

export  default MyButton