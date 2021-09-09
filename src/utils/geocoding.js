const request=require('postman-request')
const geocode=(address1,callback)=>{
    const mapbox='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address1+'.json?access_token=pk.eyJ1Ijoic2F1cmF2a2FwYWh1IiwiYSI6ImNrczh1ZmNlZTBrcmEyb2x1OWJ3NmNpbWEifQ.9mQmEI1OUZtJmIW5Rtl49g'
request({url : mapbox,json: true},(error,response)=>{
   
    if(error){
        callback('unable to connect',undefined)
    }else if(response.body.features.length===0){
       
        callback('unable to find location',undefined)

    }else{
callback(undefined,{
    lati:response.body.features[0].center[1],
    longi:response.body.features[0].center[0]

})

}
})}
module.exports=geocode