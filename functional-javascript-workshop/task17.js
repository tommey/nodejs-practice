function curryN(fn, n) {
    var parameterCount = n || fn.length;
    function wrap(memo) {
        return function (x) {
            var args = memo.concat(x);
            if (args.length == parameterCount) {
                return fn.apply(this, args);
            }
            return wrap(args);
        }
    }

    return wrap([]);
}

module.exports = curryN;
