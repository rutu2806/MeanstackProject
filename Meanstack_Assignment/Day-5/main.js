// Importing the module
let Pratik = require('./person');
let Employee = require('./employee');

class Main {
    static main() {
        console.log("This is the execution POINT!!");

        let p = new Pratik();
        let ouput = p.getName();

        let e = new Employee();
        let hello = e.hello();
        
        console.log(ouput);
        console.log(hello);
    }
}

Main.main();