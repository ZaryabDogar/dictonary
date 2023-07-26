const gettext=document.getElementById("input");
const searchel=document.getElementById("search")
const textcontel=document.getElementById("textcontainer")
const writetext=document.getElementById("word");
const meanel1=document.getElementById("mean1")
const meanel2=document.getElementById("mean2")
const synoel=document.getElementById("syno")
const posel=document.getElementById("pos")
const audioel=document.getElementById("audio")
textcontel.style.display="none"
searchel.style.display="none"


async function fetchapi (word) {
    textcontel.style.display="none"
  try {      searchel.style.display="flex"
        searchel.innerText=`Searching the meaning of: "${word}"`

                    const url= `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result=await fetch(url).then((res)=>res.json()  );
  if (result.title){
   searchel.innerText=`Sorry can't get the meaning of: "${word}"`
    setTimeout(() => {
        searchel.style.display="none"
    }, 3000);

  }
  else{
    searchel.innerText=`${result[0].word}`

    if(result[0].meanings[0].definitions[0].definition){
        meanel1.innerText=result[0].meanings[0].definitions[0].definition
    }
    if(result[0].meanings[0].definitions[1].definition){
        meanel2.innerText=result[0].meanings[0].definitions[1].definition
    }

   if (result[0].meanings[0].partOfSpeech){
    posel.innerText=result[0].meanings[0].partOfSpeech
   }else{

   }

    if(result[0].meanings[0].synonyms[0]){
        synoel.innerText=result[0].meanings[0].synonyms[0]
    }else
    if(result[0].meanings[0].synonyms[1]){
        synoel.innerText=result[0].meanings[0].synonyms[1]
    }
    else{
synoel.innerText="N/A"
    }
    
    if(result[0].phonetics[0].audio){
        audioel.src=result[0].phonetics[0].audio
    }
    else
    if(result[0].phonetics[1].audio){
        audioel.src=result[0].phonetics[1].audio
    }
    else
    if(result[0].phonetics[2].audio){
        audioel.src=result[0].phonetics[2].audio
    }
    else{
        audioel.style.display="none"
    }


    textcontel.style.display="flex"
  }
    } 
    catch (error) {   
        textcontel.style.display="none"
        console.log(error)
        searchel.innerText="An Error Occurred Please Try Again Later....!"
     
        setTimeout(() => {
            searchel.style.display="none"
        }, 7000);
    

}

    }

gettext.addEventListener("keyup", async(e) =>{

    
      if ( gettext.value && e.key=="Enter"){
   await fetchapi(gettext.value)
   try {

} 
catch (error) {
    console.log(error)
}

     gettext.value=""}
     else{
      
     }

})


