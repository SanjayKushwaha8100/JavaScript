let data= "secret information";
class User{

    constructor(userName,emailid){;
        this.Name=userName;
        this.Id=emailid;
    }
    viewData(){
        console.log(data);
    }
}

class Admin extends User{
    constructor(Name,id){
        super(Name,id);
    }
    editData(){
        console.log("I can change the data");
    }

}

let obj1=new User("Sanjay","asdfa@gamil.com");
let obj2=new User("hello","hello@gmail.com");
obj1.viewData();

// Admin can change the data 
let adminObj=new Admin("adminUser","admin@admin.com");
adminObj.editData("I can change data");
adminObj.viewData();


