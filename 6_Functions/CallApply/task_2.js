function delay(f, ms) {

    return function (...args) {
        let thisF = this; 
        setTimeout(function () {
            f.apply(thisF, args); 
        }, ms);
    };

}