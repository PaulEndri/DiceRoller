var validator = function () {
    var self = this;

    this.types = {
        'number': function (value) {
            return value != null && !isNaN(value);
        }
    };


    this.validate = function (value, type) {
        if (self.types[type] === undefined) {
            //skip validation;
            return true;
        }

        return self.types[type](value);
    }
}

module.exports = new validator;