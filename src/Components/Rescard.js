import { cdn_url } from "../utils/constants";

const ResCard=(props)=>{
    const {resdata}=props;

    // destructuring the resdata for the cleaner code

    const {
        name,
        cuisines,
        avgRating,
        
    }=resdata?.info

    const{deliveryTime,}=resdata.info.sla
    return(
        <div className="rescard">
        <img className="resimg" src={cdn_url+resdata.info.cloudinaryImageId}/>
        <h4>{name}</h4>
        <h4>{resdata.info.resId}</h4>
        <h3>{cuisines.join(",")} </h3>
        <h3>{avgRating}</h3>
        <h3>{deliveryTime}</h3>
        </div>
    )

}
export default ResCard