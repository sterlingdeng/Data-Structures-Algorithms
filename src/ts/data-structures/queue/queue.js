var Queue = /** @class */ (function () {
    function Queue() {
        this.items = {};
        this.head = 0; // head index references data
        this.tail = 0; // tail index references spot available for data
    }
    Queue.prototype.size = function () {
        return this.tail - this.head;
    };
    Queue.prototype.isEmpty = function () {
        return this.head === this.tail;
    };
    Queue.prototype.clear = function () {
        this.head = 0;
        this.tail = 0;
        this.items = {};
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty())
            return undefined;
        return this.items[this.head];
    };
    Queue.prototype.queue = function (value) {
        this.items[this.tail] = value;
        this.tail += 1;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty())
            return undefined;
        var dequeued = this.items[this.head];
        delete this.items[this.head];
        this.head += 1;
        if (this.isEmpty()) {
            this.head = 0;
            this.tail = 0;
        }
        return dequeued;
    };
    return Queue;
}());
