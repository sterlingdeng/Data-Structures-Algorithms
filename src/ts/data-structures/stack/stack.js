var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.stack = {};
    }
    Stack.prototype.push = function (value) {
        this.stack[this.count] = value;
        this.count += 1;
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty())
            return undefined;
        var popped = this.stack[this.count];
        delete this.stack[this.count];
        this.count -= 1;
        return popped;
    };
    Stack.prototype.peek = function () {
        return this.stack[this.count - 1];
    };
    Stack.prototype.size = function () {
        return this.count;
    };
    Stack.prototype.clear = function () {
        this.stack = {};
        this.count = 0;
    };
    Stack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    return Stack;
}());
