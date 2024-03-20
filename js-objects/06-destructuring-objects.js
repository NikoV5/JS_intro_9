
const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago',
    credentials: function() {
        return [this.username, this.password];
    }
};

// Object destructing (Not preferred method)

// const username = user.username;
// const password = user.password;
// const email = user.email;



//Object destructuring PREFERRED METHOD:

const {email, password, username,} = user; // order does not matter. 

console.log(username, password, email); // john-doe test1234 john@gmail.com

console.log(credentials()); // will not work because you cant destructure functions that are inside objects


