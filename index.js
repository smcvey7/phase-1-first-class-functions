function receivesAFunction(givenFunction){
    return givenFunction();
};


function returnsANamedFunction(){
    return function namedFunction(activity){
        console.log(`I hope you like ${activity}...`)
    }
};


function returnsAnAnonymousFunction(){
    return function(){
        console.log('Pork is a very sweet meat.')
    }
};
