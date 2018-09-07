exports.f1 = function(req) {
    console.log(req.body.params)
    return {
    field1: 'answer from f1',
    user: req.user
    };
};

exports.f2 = function(req) {
    console.log(req.body.params)
    return {
    field1: 'answer from f2',
    user: req.user
    };
};

exports.ferror = function(req) {
    throw new Error("sorry");
};
