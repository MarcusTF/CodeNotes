const classContainScope = (() => {
    console.log("~~~~~~~~   class  ~~~~~~~~") 

    /**
     * the "class" keyword further abstracts away the prototypal bond via syntactical
     * sugar.
     */

    class UserCreator {
        constructor(name, score) {          //this "constructor" is just UserCreator(name, score), just moved inside of the "class"
            this.name = name;
            this.score = score;
        }
        increment(){                        //now the functions are declared inside of the class, but it's doing the same thing under the hood as UserCreator.prototype.increment = ....                        
            this.score++
        }
        login(){
            console.log(`You are Logged In, ${this.name}!`)
        }

    }
    const user1 = new UserCreator('Marcus', 0)
    const user2 = new UserCreator('Jasmine', 0)
    user1.increment()
    user2.increment()
    console.log(user1)
    console.log(user2)









})()