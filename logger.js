const EventEmitter= require('events');
const uuid=require('uuid');

class Logger extends EventEmitter{
    log(msg){
        //call event
        this.emit('Message', {id: uuid.v4(), msg});
    }
}

const logger=new Logger();
logger.on('Message', (data) => console.log('Called listener:',data));
logger.log('Hello World');
logger.log("Hey");
logger.log("Hey you");
logger.log("Hey there");