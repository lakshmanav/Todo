(function (todo) {

    todo.Task = function(description, isCompleted) {
        var self = this;
        self.description = ko.observable(description);
        self.isCompleted = ko.observable(isCompleted);
        self.inFocus = ko.observable(false);

        self.toggleFocus = function() {
            var focus = ko.unwrap(self.inFocus);
            if (focus) {
                self.inFocus(false);
            } else {
                self.inFocus(true);
            }
        };
    };

})(window.todo = window.todo || {});



