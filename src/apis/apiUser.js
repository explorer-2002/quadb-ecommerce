

export async function createUser(newUser){
    console.log(newUser);

    try{
    const data = await fetch("http://localhost:5012/signup",{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const res = await data.json();
    console.log(res);
    return res.success;
}

catch(err){
    console.log(err.message)
}
}

export async function loginUser(userObj){
    try{
    const data = await fetch("http://localhost:5012/login",{
        method:"POST",
        body: JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    })

    const res = await data.json();

    console.log(res)
    
    localStorage.setItem('token',res.authToken)

    
    return res;
}

catch(err){
    console.log(err.message)
}
}