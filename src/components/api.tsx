import { useEffect,useState } from "react"
function fetchapi(){
    const [data, setData] = useState(null)
  useEffect(() => {
    fetch('http://199.34.21.254/persona/personas/0/10')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])
  return(
    <div>{data.map((details)=>{
        <div>{details.fName}</div>
    })}</div>
  )
}
export default fetchapi