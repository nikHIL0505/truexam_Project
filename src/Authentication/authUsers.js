const Users = [
    {   
        name:"Satyam",
        email:"satyam123@gmail.com",
        password:"123456",
        role:"Instructor"
    },
    {   
        name:"Ramesh",
        email:"ramesh123@gmail.com",
        password:"123456",
        role:"Instructor"
    },
    {   
        name:"Rahul",
        email:"rahul123@gmail.com",
        password:"123456",
        role:"Student"
    },
    {   
        name:"Ram",
        email:"ram123@gmail.com",
        password:"123456",
        role:"Student"
    },
    {   
        name:"Ankit",
        email:"ankit123@gmail.com",
        password:"123456",
        role:"Student"
    },
    {   
        name:"Satyam",
        email:"satyam123@gmail.com",
        password:"123456",
        role:"Instructor"
    }
];


// To check the credentials of User

export const userCreadential = (input, setError, setToken) => {
    
       let emailExist = 0
       let UserIndex = 0 
      
       // check email exist or not 

       Users.map((data, index) =>{
         if(data.email === input.email)
         {
            emailExist = 1;
            UserIndex = index           
         }
      })

      //email not exist message

     if(!emailExist){
        setError(err => ([...err, "User doesn't exist"]));
     }

     // generate Token

     else {
        if(Users[UserIndex].password === input.password){
            
            let token = {
                name : Users[UserIndex].name,
                role: Users[UserIndex].role
            };
            sessionStorage.setItem("Token",JSON.stringify(token))
            
        }
        else {
             setError(err => ([...err, "Username or password is invalid."]))
           }
     }
}

// To SignOut the user

export const SignOut = (setInput) => {
      sessionStorage.clear() ;
      setInput({
          email: "",
          password:""
      })  
}