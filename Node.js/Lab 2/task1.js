let customeventmodule= require('./custom-event-module')

let customevent=customeventmodule.customemitter

let event=new customevent()

event.on('greet',function(){
    console.log("hi from custom event")
})

event.dosomething()
