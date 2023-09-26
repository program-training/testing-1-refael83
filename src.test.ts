import { describe,expect, test } from 'vitest'
import { lengthStr,palindrome,sorted, sqrt,sumArray,fetchUserData,fibonacci } from './src'


describe("src",()=>{
test ('length of string test is 4',()=>{
    expect(lengthStr('test')).toBe(4)
})

test ('asdsa is a palindrome',()=>{
    expect (palindrome('asdsa')).toBe(true)
})

test ('[2,5,3,8] in sort is [2,3,5,8]',()=>{

    const array =['d',4,6]

    expect(sorted([2,5,3,8])).toEqual([2,3,5,8])
    expect(sorted(array)).toThrow
})

test('sqrt',()=>{
    const num =25

    const result=sqrt(num)

    expect(result).toBe(5)
})

test('sumArray1',()=>{
    const array=[1,3,5,7]

    const result =16

    expect(sumArray(array)).toBe(result)
})

test('sumArray2',()=>{
    const array =[1,3,5,7]

    const bigThen=10

    expect (sumArray(array)).toBeGreaterThan(bigThen)
})

test('fetchUserData',async ()=>{
    const userId= 1
    
    const test = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      };

    const testID= 100 

    const result=await fetchUserData(userId)
    
    expect(result).toEqual(test)
    expect(fetchUserData(testID)).toThrow
})

test('fibonacci',()=>{
    const test1=[1,1,2,3,5,8]
    const test2=[1,1,1,1]

    const result1=fibonacci(test1)
    const result2= fibonacci(test2)

    expect(result1).toBe(13)
    expect(result2).toThrow
})
}) 


