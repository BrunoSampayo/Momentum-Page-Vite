//Function that receives hours and minutes and verify if lower that zero
//if is, insert zero before
export const CorrectClock= (h:number,m:number)=>{
    let hour=h<10?`0${h}`: h;
    let minute=m<10?`0${m}`: m;
    return(`${hour}:${minute}`)
    
}
