
const request=require('postman-request')
const forcaste =(num1,num2,callback)=>{

const url='http://api.weatherstack.com/current?access_key=07340326da3ead4f2d7e35c585ebfbda&query='+num1+','+ num2
request({url,json: true},(error,response)=>{
    if(error){
        callback('unable to connect',undefined)
    }else if(response.body.error){
       
        callback('unable to find location',undefined)

    }else{
        
callback(undefined,response.body)

}}
)
}
module.exports=forcaste