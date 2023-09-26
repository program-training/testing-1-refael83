interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
  


export function lengthStr(str:string):number{
    return str.length
}

export function palindrome(str:string):boolean{
    console.log(str.split('').reverse().join(''))
   return str == str.split('').reverse().join('')? true:false
}

export function sorted(array:number[]):number[]{
  return array.sort((a,b)=>a-b)
}

export function sqrt(num:number):number{
    return Math.sqrt(num)
}

export function sumArray(array:number[]):number{
   let sum =0
   for (let i = 0;i<array.length;i++){
    sum +=array[i]
   }
   return sum
}

export async function fetchUserData (userId:number): Promise<User>{
    try{
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        const result:User =await response.json()
        console.log(result);
        
        return result 
    }
    catch(error){
        console.error("Error fetching user data:", error);
        throw error
    }  
}
function fibonacciTest(array:number[]):boolean{
    for(let i=array.length-1; i>=0;i--){
        if(i==1&&array[i]===1&&array[i-1]===1)
        return true
        if(array[i]!==array[i-1]+array[i-2])
        return false
    }
    return true
}
export function fibonacci(array:number[]):number|Error{
   if (fibonacciTest(array))
      return array[array.length-1]+array[array.length-2]
    else
      return new Error;
}
palindrome('asdsa')
fetchUserData(1)