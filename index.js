/**
 * Expose compositor.
 */

module.exports = compose;

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */
// middleware是一个数组，元素都是generator。compose函数将middleware数组转成形如*g1(g2(g3(noop)))的generator。
function compose(middleware) {
    return function*(next) {
        if (!next) next = noop(); // Generator 函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是遍历器对象（Iterator Object）。

        var i = middleware.length;

        while (i--) {
            next = middleware[i].call(this, next);
        }

        return yield* next;
    };
}

/**
 * Noop.
 *
 * @api private
 */

function* noop() {}
