"use client";
import Link from "next/link"
import { useRouter } from "next/navigation";

const Home = () => {
  const router= useRouter();
  const handleClicked = () => {
    console.log("Clicked");
    router.push('/products'); 
    // can also do router.replace() or back() or forward()
  }
  return (
    <div>
      <Link href="/products" replace>Blog</Link>
      <button onClick={handleClicked}>Order Placed</button>
    </div>
  )
}
// if we write replace then on clicking back button we will be at thw blog page
// i.e replaces history state  
export default Home