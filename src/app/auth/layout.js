// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function RootLayout({ children }) {
  const pathname=usePathname();
  // will show the path of url so we can check this to show a link as active 
  return (
    <div >
     
        <Link href="/auth/register">Register</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/forgot-password">ForgotPassword</Link>
      {children}
    </div>
  )
}
// wrap the folders into another folder name (with-auth-layout) and then only those routes will have layout

// /if we name the layout as template.js then for each page we will have new dom elements new states 
// like ek input tag h register me agr wo layout me h toh jo value usme fill krnge wo same hoga agr within pages switch kre 
// pr jaise hi rename krnge as template nya dom,state variable bnega hr page 
// agr layout,template dono h toh layout ke andr template then page 