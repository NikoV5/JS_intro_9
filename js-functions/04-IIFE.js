
function sayHi() {
    console.log('Hi');
}
// you have to invoke the function when you do it this way:
sayHi();



// by doing it this way, it invokes itself:
(function() {
    console.log('This is an IIFE!');
})();


(function () {
    console.log('Hi');
})();


