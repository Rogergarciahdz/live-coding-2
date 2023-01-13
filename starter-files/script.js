// API
const API_ENDPOINT = '';
let btn

function getData() {
    let promesa = fetch("https://yesno.wtf/api",{
method:"GET"

    });
    promesa.then( (response)=>{
    response.json().then( (data) => {
        createCards(data);
    }//data

    )//then json
.catch( (error)=>{
    console.error("error en el formato de respuesta "+ error.message);
});//catch



    }//response
    )//then
.catch( (error) =>{
    console.error("Error en la solicitud"+error.message);
}

);//cantch

}//getData 


Element.addEventListener("summit",function() {


});
