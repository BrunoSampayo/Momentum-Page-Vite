
export const CorrectClock= (h:number,m:number)=>{
    let hora=h<10?`0${h}`: h;
    let minute=m<10?`0${m}`: m;
    return(`${hora}:${minute}`)
    
}
