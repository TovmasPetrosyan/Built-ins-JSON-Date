function myTimeout(callback,interval){
    const time = new Date();
    time.setMilliseconds(time.getMilliseconds() + interval);
    while(new Date() < time){   
    }
    callback();
}
