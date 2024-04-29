
class USer{
    constructor(name , id , email, phone , age, body ,weight){
    this.name=name
    this.id=id
    this.email=email
    this.phone=phone
    this,age=age
    this.body=body
    this.weight =weight
    
    }
    
}

class Vip extends USer{
    constructor(name , id , email, phone , age,body,weight, fathername){
        super(name , id , email, phone , age,body,weight )
        this.fathername=fathername
     

    }
}

let mahtab = new USer( 'mahtab' , '2308', 'withgaming50@gmail.com','01723473565', '22','26','60' )
let hasib = new USer( 'hasib' , '2309', 'mdhasib50@gmail.com','01983273890', '26', '34','60' )
let mhatabb = new Vip('mahtabb' , '23008', 'withgamming50@gmail.com','017723473565', '222','34','60','saheb ali')




console.log(mahtab);
console.log(hasib);
console.log(mhatabb);



// setInterval project mern stack devloper text Animation
// setInterval project mern stack devloper text Animation



let type = document.querySelector('.type')
let typetext =type.innerHTML;

let typearray = typetext.split('')
let count = 0

type.innerHTML=''
function typejs(){
  
if( typetext.length > count){
    type.innerHTML += typetext.charAt(count++)
     typearray = typetext.split('');
   

}else{
    typearray.pop()
    type.innerHTML= typearray.join('');
 
  
}
if( typearray.length == 0){
    count =0
    

}
   
   

}

setInterval(() => {
    typejs()
}, 300);
// setInterval project mern stack devloper text Animation
