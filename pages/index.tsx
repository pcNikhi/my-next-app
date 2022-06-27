import ServiceCard from "../components/ServiceCard"
import { getServers } from "dns/promises"
import { services } from "../data"
// import StudentForm from "../src/components/StudentForm"
// import TableData from "../src/components/table"
// import about from "../src/components/about"
// import Slidebar from "../src/components/slidebar"
// import ServiceCard from "./components/ServiceCard"
export default function home() {
  console.log(services)
  return (
    <div className="flex flex-col flex-grow px-6 pt-1" >
     <h5>Technical Writing Consultants - Discover At Shopwebly! Many Products. Quick Results. Search and Discover. Easy Acces. Compare Products. Find Easily. Types: 24/7 Accessible, Big Variaty, Instant Results, Products Online.</h5>
     <div className="flex-grow pt-4 mt-5 bg-gray-300">
      <h5> what i did</h5>
      <div className="grid flex-grow gap-6 lg:grid-cols-2 ">
        
        {services.map((services)=>
        <div className="flex-grow bg-green-300 rounded-lg lg:col-span-1">
        <ServiceCard service={services}/>
        </div>
        )}
      </div>
     </div>
    </div>
   
  )
}
// export const gerStaticProps =async (contex:GetStaticPropsContext)=>{
//  const res= await fetch('http://localhost:3001/api/services')
//  const data = await res.json()
//  console.log('server',services)
//   return{
//     props:{
//       services:data.services,
//     }
//   }
// }
