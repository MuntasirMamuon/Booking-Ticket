


 const storeData=(key,user)=>{
    const isExist=JSON.parse(localStorage.getItem(key))
    if(isExist){
        const data=[...isExist,user]
        localStorage.setItem(key,JSON.stringify(data))
    }else{
   localStorage.setItem(key,JSON.stringify([user]))
    }
 }
 export default storeData;