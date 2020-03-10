const formData=document.querySelector('form')
const message = document.querySelector('input')
const displaydata = document.querySelector('#message-1')
const displaydata2 = document.querySelector('#message-2')
displaydata.textContent='loading..'
displaydata.textContent=''
formData.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = message.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            return displaydata.textContent = data.error
        }
        displaydata.textContent=data.Data
        displaydata2.textContent=data.forecast
    })

})

    console.log(location)
})