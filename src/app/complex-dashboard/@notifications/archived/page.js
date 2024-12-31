import Link from "next/link"

const Archieve = () => {
  return (
    <div>
      Switched To Archieve Mode
      <Link href="/complex-dashboard">Default</Link>
    </div>
  )
}
// when click on Link to navigate to complex-dashboard the link changes but the components remain the same 
// isliye is page pe aakr jaise hi reload krnge sara content gayab ho jayega 
// so isk
export default Archieve