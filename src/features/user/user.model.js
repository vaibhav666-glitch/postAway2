

export default class UserModel{
    constructor(id,name,email,password){
        this.id=id;
        this.name=name;
        this.email=email;
        this.password=password;
    }
      static getAll(){
        return userArr;
      }

      static addUser(userObj){
         let user=new UserModel(userArr.length+1,userObj.name,userObj.email,userObj.password);
         userArr.push(user);
         return user;
      }

      static login(email,password)
      {
        let user=userArr.find((user)=>user.email==email && user.password==password);
        return user;
      }
}
let userArr=[{id:1,
  name:'John',
  email:'john@gmail.com',
  password:'123456',
}]