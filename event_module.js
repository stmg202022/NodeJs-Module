const EventEmitter = require("events");

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on("WaterFull", ()=>{

    console.log(`Please turn off moter.`);

    setTimeout(()=>{
        console.log("please turn off the motor! it's a gentle reminder.");
    },3000)
    
});

console.log("The event is running");
myEmitter.emit("WaterFull");
console.log("The event is still running.");


//Note: Node js work on Event driven architectures 
        // Real time chat application 