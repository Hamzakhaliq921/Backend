// In Node.js, the Event Module (called events) is used to handle events—basically actions or occurrences like clicking a button, receiving data, or finishing a task.

// Think of it like this:
// 👉 One part of your program fires an event
// 👉 Another part listens and reacts to it

// Node.js uses an event-driven system, meaning:

// Things happen (events)
// Code responds to them (listeners)

//require event
// const emitter=require('events')

// const myemitter=new emitter()


// myemitter.on('greet',(data)=>{

// console.log(`Hello ${data} how are you?`);

// })

// myemitter.emit('greet','HAMZA')

//EXAMPLE
myEmitter.on('orderPlaced', (food) => {
  console.log(`Cooking ${food}...`);
});

myEmitter.emit('orderPlaced', 'Biryani');