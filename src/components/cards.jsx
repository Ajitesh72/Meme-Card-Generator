import React from "react"

export default function card(props){
    const[allmemes,setallMemes]=React.useState({
        image:"",
        image_1:"",
        image_2:"",
        image2:"",
        name:"",
        name_1:"",
        name_2:"",
        name2:"",
        
    })
    const[sr_no,setsr_No]=React.useState(2);


    React.useEffect(function(){
         fetch("https://api.imgflip.com/get_memes")
         .then(res=>res.json())
        .then(data=>setallMemes(data.data.memes))
    },[])


    
   
    function FirstMemeImage(){
        
        // setsr_No(0)
        
      
        const url=allmemes[0].url
        const jokename=allmemes[0].name
       
        setallMemes(prevMeme=>({
            ...prevMeme,
            image:url,
            name:jokename

        }))
        

    }

    function SecondMemeImage(){
        
        // setsr_No(1)
        
      
        const url=allmemes[1].url
        const jokename=allmemes[1].name
       
        setallMemes(prevMeme=>({
            ...prevMeme,
            image_1:url,
            name_1:jokename

        }))
        

    }

    function ThirdMemeImage(){
        
        // setsr_No(2)
        
      
        const url=allmemes[2].url
        const jokename=allmemes[2].name
        setsr_No(sr_no+1);
       
        setallMemes(prevMeme=>({
            ...prevMeme,
            image_2:url,
            name_2:jokename

        }))
        

    }




    
    function NextMemeImage(){
         setsr_No(sr_no+1);
        const url_2=allmemes[sr_no].url
        const jokename2=allmemes[sr_no].name
        console.log(sr_no)
        
       
        setallMemes(prevMeme=>({
            ...prevMeme,
            image2:url_2,
            name2:jokename2

        }))
    }
    



    return(
        <main className={props.darkmode ? "dark" : ""}>
         <div className="Meme">
            <div>
            <button onClick={FirstMemeImage} className="Button_1">click For first Meme</button> 
            <br/>
             <img src={allmemes.image} alt="" className="Card_Image" />
             <p className="meme_name">{allmemes.name}</p>
            </div>

            <div>
            <button onClick={SecondMemeImage} className="Button_2">click for Second Meme</button>
            <br/>
            <img src={allmemes.image_1} alt="" className="Card_Image" /> 
            <p className="meme_name">{allmemes.name_1}</p>

            </div>
            <div>
            <button onClick={ThirdMemeImage} className="Button_3">click for Third Meme</button> 
            <br/>
            <img src={allmemes.image_2} alt="" className="Card_Image" />
            <p className="meme_name">{allmemes.name_2}</p>

            </div>
            <div>
            <button onClick={NextMemeImage} className="Button_4">Next Meme</button> 
            <br/>
            
            <img src={allmemes.image2} alt="" className="Card_Image" /> 
            <p className="meme_name">{allmemes.name2}</p>

            </div>
         </div>
         </main>
    )
}
       
            
              
              
              

            {/* <img src={allmemes.image} alt="" className="Card_Image" />
            <p>{allmemes.name}</p>
            <button onClick={NextMemeImage}>Next</button> 
            <img src={allmemes.image2} alt="" className="Card_Image" /> */}

           
            
       
        
            

        
   


    
    



