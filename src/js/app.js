
const APP={
deferredIntall:null,

init(){
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register('/sw.js').then(()=>{
          console.log('!!!!!!!!!!!!Service worker registered!!!');
        });
      }

      self.addEventListener('message',(ev)=>{

    });

    self.addEventListener('appinstalled',(ev)=>{

      });

      self.addEventListener('beforeinstallprompt',(ev)=>{
        ev.preventDefault();
        APP.deferredIntall=ev;
        console.log('Save install event');
        });

        let btn=document.getElementById('btnInstall');
        btn?.addEventListener('click',()=>{
            console.log('0startChromeIntall Start installl!!');
            if(APP.deferredIntall){
                console.log('startChromeIntall Start installl!!');
                console.log(APP.deferredIntall);
                APP.deferredIntall.prompt();
                APP.deferredIntall.userChoice.then(
                    choice=>{
                        if(choice.outcome=='accepted'){
                            console.log('Accepted!!!!');
                        }else{
                            console.log('Cancelled');
                        }
                    }
                )
            }
        });

},
startChromeIntall(){
    console.log('1startChromeIntall Start installl!!');
    if(APP.deferredIntall){
        console.log('startChromeIntall Start installl!!');
        console.log(APP.deferredIntall);
    }
}

};

document.addEventListener('DOMContentLoaded',APP.init);


