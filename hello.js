module.export.handler=async(event)=>{
  return{
    statusCode:200,
    headers:{
      'Content-Type':'application/json',

    },
    body: JSON.strigify({messege:"Hello from youtube Demo API"}),
      
    
  };

};