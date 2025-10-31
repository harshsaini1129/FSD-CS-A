const res=fetch('https://api.github.com/users/ashishvirgo/repos');
res.then((res)=>res.json())
.then((data)=>console.log(data))
.catch(error => console.error("Error:", error.message));