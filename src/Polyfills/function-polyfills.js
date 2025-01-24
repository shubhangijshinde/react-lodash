    let car1 = {
        color: 'red',
        name: 'Tesla'
    }

    let car2 = {
        color: 'white',
        name: 'Mazda'
    }

    function myCar(currency, price) {
        console.log(`I have ${this.name} car of color ${this.color} and the price of car is ${price}/${currency}`);
    }

    // myCar.call(car1, 'doller', '200000');
    // myCar.apply(car2, ['doller', '40000']);
    // let descMyCar = myCar.bind(car2);
    // descMyCar('doller', '200000');

    Function.prototype.myCall = function(context = {}, ...args) {
        if(typeof this !== 'function') {
            throw new Error("This is not a function")
        }

        context.fn = this;
        context.fn(...args);
    }

    // myCar.myCall(car1, 'doller', '200000');

    Function.prototype.myApply = function(context = {}, args = []) {
        if(typeof this !== 'function') {
            throw new Error("This is not a function")
        }

        context.fn = this;
        context.fn(...args);
    }

    myCar.myApply(car2, ['doller', '40000']);


    Function.prototype.myBind = function(context = {}, ...args) {
        if(typeof this !== 'function') {
            throw new Error('Not a function')
        }

        context.fn = this;

        return function(...newargs) {
            context.fn(...args, ...newargs);
        }
    }

    let newfn = myCar.bind(car2, '34000');
    newfn('$')