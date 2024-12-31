"use client"; // This tells Next.js that this component should be rendered on the client  

import { useParams} from 'next/navigation'; 

const Docs = () => {  
  const router = useParams();  
  const { slug } = router;
  console.log(slug?.length);
 if(slug?.length===2){
    return <h1>Viewing Docs for feature {slug[0]} and Concept {slug[1]}</h1>
 }
  return (  
    <div>  
      <h1>  
        Docs Home Page {slug || 'Loading...'}  
      </h1>  
    </div>  
  );  
};  
// agr [[..slug]] hai toh phir next js khud ka catch all route "*" 
// use hoga agr /docs call hota hai toh [..slug] wle structure me koi page nhi hai docs ke andr 
// [[..slug]] use krne pe yhi page display hoga /docs wle cheezo pe 
export default Docs; 
