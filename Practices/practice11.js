

class Customer {
    constructor(name, age, membershipType, membershipCost) {
    this.name = name;
    this.age = age;
    this.membershipType = membershipType;
    this.membershipCost = membershipCost;
    }

    getDetails() {
        return `${this.name} is ${this.age} years old and has a ${this.membershipType} membership with $${this.membershipCost}`
    }
    upgradeMembership() {
        this.membershipType = "Premium";
        this.membershipCost *= 1.2; 
    }
}


class VIPCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost) {
        super(name, age, membershipType, membershipCost)
    }

    applyDiscount() {
        this.membershipCost *= 0.9; 
    }
}

class BusinessCustomer extends Customer {
    constructor(name, age, membershipType, membershipCost, duration) {
    super(name, age, membershipType, membershipCost)
    this.duration = duration;
    }

    extendContract() {
        this.duration++; 
        this.membershipCost *= 0.85; 
    }
}

const customer1 = new Customer('John Doe', 30, 'Basic', 50)
const vipCustomer1 = new VIPCustomer('Jane Smith', 35, 'Gold', 100)
const businessCustomer1 = new BusinessCustomer('David Johnson', 40, 'Platinum', 200,  2)


customer1.upgradeMembership();
//     -this will upgrade the membership type of customer1 to 'Premium'
vipCustomer1.applyDiscount();
//     -this will apply a discount of 10% to the membership type of vipCustomer
businessCustomer1.extendContract();
//     -this will extend the contract of businessCustomer by 1 year

const customers = [customer1, vipCustomer1, businessCustomer1];

for (const customer of customers) {
  console.log(customer.getDetails());
}

// EXPECTED OUTPUT:
// John Doe is 30 years old and has a Premium membership with $60.
// Jane Smith is 35 years old and has a Gold membership with $90.
// David Johnson is 40 years old and has a Platinum membership with $170.
// */


