"useclient";
import { notFound } from "next/navigation"
const Review = ({params}) => {
  console.log(parseInt(params.reviewid));
  if(parseInt(params.reviewid)>1000)
   {
    notFound();
   } 

  return (
    <div>
      Bad Product
    </div>
  )
}
export default Review
