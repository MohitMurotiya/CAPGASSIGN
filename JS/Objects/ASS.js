function Person(fname,lname,age,skills,dateofbirth,address,married,profession){  //Object Constructor
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;
}

person1 = new Person("nikhil","goud",22,["c","c++","DSA"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
person2=new Person("harish","chinna",21,"HTML","08/06/1997",{city:"Ameerpet",pincode:"500038"},"false","jr-analyst")

print=function(){
    console.log(person1);
    console.log(person2);
}();

amithab=new Person("amithab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sranalyst")
abhisheik=new Person("abhisheik",21,"HTML","08/06/1997","false","jr analyst")
var abhisheik=Object.create(amithab);
print=function()
{
console.log(amithab);
console.log(abhisheik.fname);
console.log(abhisheik.lname);
console.log(abhisheik.address);
}();

console.log('\n ------------------LAST ASSIGNMENT------------------')

class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }

    getCurrentBalance() {
        return this.accountBalance;
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance){
        super(accountNumber, accountHolderName, accountBalance);
    }

    withdraw(amount) {
        if((this.accountBalance <= amount)){
            return 'Insufficent Balance';
        }else{
            this.accountBalance -= amount;
            return 'Remaininng Account Balance : ' + this.accountBalance; 
        }
    }


}

class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit){
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }

    withdraw(amount) {
        if(amount > (this.odLimit + this.accountBalance)) {
            return 'Below odLimit';
        }else{
            this.accountBalance -= amount;
            return 'Remaining Balance is : ' + this.accountBalance;
        }
    }
}

obj1 = new SavingAccount(10001, 'MM', 28000);
console.log(obj1);
console.log(obj1.withdraw(30000));
console.log(obj1.getCurrentBalance());

obj2 = new CurrentAccount(10002, 'PM', 12000, 10000);
console.log('-----\n');
console.log(obj2);
console.log(obj2.withdraw(30000));
console.log(obj2.getCurrentBalance());
