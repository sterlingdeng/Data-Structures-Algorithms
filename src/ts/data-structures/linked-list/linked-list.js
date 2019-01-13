"use strict";
/**
 * Implement the following methods:
 * pushFront
 * pushBack
 * insert
 * getElementAt
 * isEmpty()
 * indexOf
 * size()
 * removeAt
 * remove
 * toString()
 */
var llNode = /** @class */ (function () {
    function llNode(value) {
        this.value = value;
        this.next;
        this.prev;
    }
    return llNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.head;
    }
    LinkedList.prototype.pushFront = function (value) {
        var node = new llNode(value);
        node.next = this.head;
        this.head = node;
        this.length += 1;
    };
    LinkedList.prototype.pushBack = function (value) {
        if (this.length === 0) {
            this.pushFront(value);
            this.length += 1;
            return;
        }
        var currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        var node = new llNode(value);
        currNode.next = node;
        this.length += 1;
    };
    LinkedList.prototype.insert = function (value, position) {
        if (position < 0)
            return undefined;
        if (position === 0)
            this.pushFront(value);
        if (position === this.length)
            this.pushBack(value);
        if (position > this.length)
            return undefined;
        var currNode = this.head;
        var newNode = new llNode(value);
        for (var i = 0; i < position - 1; i += 1) {
            currNode = currNode.next;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length += 1;
    };
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    };
    LinkedList.prototype.getElementAt = function (idx) {
        if (this.isEmpty())
            return null;
        var currNode = this.head;
        for (var i = 0; i < idx; i += 1) {
            currNode = currNode.next;
        }
        return currNode.value;
    };
    LinkedList.prototype.indexOf = function (val) {
        var idx = 0;
        var currNode = this.head;
        while (idx < this.length) {
            if (currNode.value === val) {
                return idx;
            }
            idx += 1;
        }
        return undefined;
    };
    // 0 - 1 - 2 - 3 - 4 - 5   remove at 3
    LinkedList.prototype.removeAt = function (idx) {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }
        var currNode = this.head;
        var prevNode;
        for (var i = 0; i < idx; i += 1) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        prevNode.next = currNode.next;
        this.length -= 1;
    };
    LinkedList.prototype.remove = function (val) {
        var idx = this.indexOf(val);
        this.removeAt(idx);
        this.length -= 1;
    };
    return LinkedList;
}());
module.exports = { llNode: llNode, LinkedList: LinkedList };
