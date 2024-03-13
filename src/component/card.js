import React, { useState } from 'react'


const Card = () => {
    const [searchTerm,setSearchTerm]=useState("");
    const cardData=[{
      "id":1,
      "title":"CN Chinese",
      "stare":5,
      "location":"228 City Road, Cardiff",
      "localId":"CF243JH",
      "food":"Chinese"
    },
    
      {
        "id":2,
        "title":"@ Thai",
        "stare":5,
        "location":"376 Rayleigh Road, Essex",
        "localId":"SS9 5PT",
        "food":"Thai"
      }
    ,{
      "id":3,
      "title":"@ Thai Restaurant",
      "stare":5,
      "location":"30 Greyhound Road Hammersmith, London",
      "localId":"W6 8NX",
      "food":"Thai"
    }
    ,{
        "id":4,
        "title":"@ Thai Restaurant",
        "stare":5,
        "location":"30 Greyhound Road Hammersmith, London",
        "localId":"W6 8NX",
        "food":"Thai"
      }
      ,{
        "id":5,
        "title":"@Indian.com",
        "stare":5,
        "location":"9 Broughton Hall Road, Broughton",
        "localId":"CH4 0QR",
        "food":"Curry"
      }
      ,{
        "id":6,
        "title":"007 Takeaway",
        "stare":5,
        "location":" 6 Drummond Street, Rotherham",
        "localId":"S65 1HY",
        "food":"Pizza"
      }
      ,{
        "id":7,
        "title":"042 Restaurant & Bar",
        "stare":3,
        "location":" 885 High Road Leytonstone, London",
        "localId":"CH4 0QR",
        "food":"African"
      }
      ,{
        "id":8,
        "title":"042 Restaurant & Bar",
        "stare":3,
        "location":"9 Broughton Hall Road, Broughton",
        "localId":"CH4 0QR",
        "food":"Curry"
      }
      ,{
        "id":9,
        "title":"1 2 3 Chinese",
        "stare":5,
        "location":" Unit 4 Spencer House, Swalwell",
        "localId":"Chinese",
        "food":"Curry"
      }
      
      ,{
        "id":10,
        "title":"1st Class Pizza",
        "stare":5,
        "location":" 388 Filton Avenue, Bristol",
        "localId":"BS7 0BE",
        "food":"Curry"
      }
      ,{
        "id":11,
        "title":"1st Class Pizza",
        "stare":5,
        "location":" 388 Filton Avenue, Bristol",
        "localId":"BS7 0BE",
        "food":"Curry"
      }
      ,{
        "id":12,
        "title":"1st Class Pizza",
        "stare":5,
        "location":" 70 Carter Lane, Mansfield",
        "localId":"BS7 0BE",
        "food":"Curry"
      }
      
  
  ]
    return (
      <>
      <div style={{
        margin:'30px'
      }}>
        <div>
          <input type='Text' placeholder='Search restaurants..' onChange={(e)=>{
            setSearchTerm(e.target.value);
          }} style={{
            margin:'20px',
            height:'20px',
            width:'200px',
            border:'2px solid black',
            padding:'4px'
          }}/>
        </div>
        <div style={{
            display:'grid',
            gridTemplateColumns:'auto auto auto',
            gap:'5rem',
            padding:'20px',
            width:'90vw'

        }}>
          {
            cardData.filter((val)=>{
              if(searchTerm==""){
                return val;
  
              }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
  
              }
            })
            
            .map((val,index)=>{
              return(
                  
  
                  
                <div key={index} style={{
                    
                    backgroundColor:'rgba(128, 128, 128, 0.556)',
                    
                }}>
                <div style={{
                    padding:' 10px 20px'
                }}>
                  <h3>{val.title}  {val.stare}</h3>
                  <p>{val.location}</p>
                  <p>{val.localId}</p>
                  </div>
                  <div style={{
                    backgroundColor:'#0000006b',
                    padding:'5px 20px'
                  }}><p style={{
                    color:'#22C55E'
                  }}>{val.food}</p>
                  <p style={{
                    color:'rgba(21, 92, 235, 0.66)'
                  }}>Visit Menu</p>
                  
                  </div>
                  
                </div>
              )
            })
          }
        </div>
      </div>
      </>
    );
}

export default Card