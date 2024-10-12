import ResCard from "./Rescard";

import {useState,useEffect} from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";





const ResContainer=()=>{
  const [restraunts1,setrestraunts1]=useState([])
  const [restraunts,setrestraunts]=useState([])
  const [Searchtext,setSearchtext]=useState("")

  useEffect(()=>{
    fetchdata()
  },[])

  fetchdata= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json =await data.json()

    // console.log(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    const apirestaurants = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(apirestaurants)
    setrestraunts1(apirestaurants)
    setrestraunts(apirestaurants)
    // json.data.cards[1].card.card.girdElements.infoWithStyle.restaurants
  }

  if(restraunts1.length===0)
  {
    return(
    
    <div className="shimmerdiv"><Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
    <Shimmer />
</div>
    ) 
  }


    return(




      

      
        <div >
             <div className="feature">
              <div className="search">

                <input
                type="text"
                value={Searchtext}
                onChange={(e)=> {
                  setSearchtext(e.target.value)
                }}>
                </input>
                <button
                className="searchbtn"
                onClick={()=>{
                  const filtered=restraunts.filter((res)=>res.info.name.toLowerCase().includes(Searchtext.toLowerCase()) )
                setrestraunts1(filtered)
                console.log(filtered)
                }
                }
                >Search</button>

              </div>


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
  {restraunts1.map((restraun) => (
    <Link to={"restaurent/" + restraun.info.id} key={restraun.info.id}>
      <ResCard resdata={restraun} />
    </Link>
  ))}
</div>

        
        
        
        
        
        {/* <div className="rescontainer">

            {restraunts1.map(restraun=> (<Link to={"restaurent/" + restraun.info.id}><ResCard key={restraun.info.id} resdata= {restraun} />))}
          
            </div> */}
        </div>
    )
}

export default ResContainer;