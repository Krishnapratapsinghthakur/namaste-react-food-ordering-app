import { useEffect, useState } from 'react'
import { json,useParams} from 'react-router-dom'
import { cdn_url,rdn_url } from '../utils/constants'


import Shimmer from './Shimmer'

const ResMenu = () => {
    const [resmenu,setresmenu]=useState([])
    const [resitem,setresitem]=useState([])

    const  {id} =useParams()
    console.log(id)
    

    useEffect(()=>{
        fetchmenu()
    },[])

    const fetchmenu=async ()=>{
        const data= await fetch(rdn_url + id )
        // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId=766478&catalog_qa=undefined&submitAction=ENTER
        const json= await data.json()
        console.log(json)
        setresmenu(json?.data?.cards)
        setresitem(json?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        // .cards[2]?.card?.card?.info
         await console.log(resmenu)
         await console.log(resitem)

   
    }
    if (!resmenu || resmenu.length === 0) return <Shimmer />;
if (!resitem || resitem.length === 0) return <Shimmer />;
    
    // if(resmenu.length===0) return <Shimmer />
    // if(resitem.length===0) return <Shimmer />
    // const {name,city,avgRating,costForTwoMessage,cuisines}=resmenu[2]?.card?.card?.info
   
    // const {name}=resmenu[2]?.card?.card?.info.name;

    const Itemcard=(resitem)=>{
        
        // setresitem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.itemCards)

        // const {name}=resitem[1]?.card?.info?.name
        return(
            <div className='itemcard'>
                <h1>{resitem[1]?.card?.info?.name}</h1>
                {console.log(resitem[1]?.card?.info?.name)}
                <h2>krishna</h2>

            </div>
        )
    }

  return (

    <div className='resmenu'>
        <h1>this is page dedicatd to the specific restraunt</h1>
        <h3>{resmenu[2]?.card?.card?.info.name}</h3>
        <h3>{resmenu[2]?.card?.card?.info.city}</h3>
        {/* {console.log(resmenu[])} */}
        {console.log(resitem)}
        <h3>{resmenu[2]?.card?.card?.info.avgRating}</h3>
        <h3>{resmenu[2]?.card?.card?.info.costForTwoMessage}</h3>
        <h3>{resmenu[2]?.card?.card?.info.cuisines.join(",")}</h3>
        {/* resmenu[2]?.card?.card?.info. */}
            {console.log(resitem[1]?.card?.info?.name)}

        <div className='resitem'>
        {resitem.map(  (res)=>{
            return(
                <div>
                    <ul>
                        <li key={res.card.info.id}>
                        {res?.card?.info?.name}

                        </li>
                        <li>
                        {res?.card?.info?.price}
                        </li>
                    </ul>
                
                    <img  className="resitemimg" src={cdn_url + res?.card?.info?.imageId}/>
                    

                    
                </div>
            )
        })}
        </div>

       

       
                
            
    
       
        
        
        

      
    </div>

  )
}

export default ResMenu
