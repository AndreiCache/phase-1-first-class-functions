
function receivesAFunction (callback){
    callback();
}

// function confussion (){
//     console.log ("whats happening")
// }

// function school (){
//     receivesAFunction();
//     confussion ();

// function returnsANamedFunction (){
//     return returnsANamedFunction ();
// }

function returnsANamedFunction (){

        return returnsANamedFunction
    }

function returnsAnAnonymousFunction (){
    return (function() {
        return 'nothing'
    }
    )}