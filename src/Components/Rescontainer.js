import ResCard from "./Rescard";
import restaurants from "../utils/hardcoded";
import {useState} from 'react'





const ResContainer=()=>{
  const [restraunts1,setrestraunts1]=useState(restaurants)
    return(

      

      
        <div >
             <div className="search">
                <button
                    className="btn"
                    onClick={()=>{
                       const res=restraunts1.filter
                      ((res)=>res.info.avgRating > 4.2)
                       {console.log(res)}
                         setrestraunts1(res)
                      }}>Top rated restraunts</button>

        </div>
        <div className="rescontainer">

            {restraunts1.map(restraun=>(<ResCard key={restraun.info.id} resdata= {restraun} />))}
          
            </div>
        </div>
    )
}

export default ResContainer;