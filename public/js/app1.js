console.log("server check")
const address=document.querySelector('form')
const search =document.querySelector('input')
const msg1 =document.querySelector('#m1')
const msg2 =document.querySelector('#m2')


address.addEventListener('submit',(e)=>{
    e.preventDefault()
msg1.textContent="loading...."
msg2.textContent=""

const x=search.value

fetch('http://localhost:1002/weather?address='+ x).then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            // console.log(data.error)
            msg1.textContent=data.error
        }
        else{
            console.log(data.current)
            console.log(data.location)
            msg1.textContent=data.current.temperature+'*c'
            msg2.textContent=data.location.region +' ,'+data.location.country

        }

    })
})
})