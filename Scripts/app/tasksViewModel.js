(function(todo) {

    todo.TasksViewModel = function () {
        var self = this;

        self.tasks = ko.observableArray();
        self.addTask = function() {
            self.tasks.push(new todo.Task(self.taskDescription()));
        };

        self.removeTask = function() {
            self.tasks.remove(this);
        };

        self.taskDescription = ko.observable();

        self.dateTimeNow = ko.observable(moment().format('MMMM Do YYYY, h:mm:ss a'));
        self.updateClock = function() {
            self.dateTimeNow(moment().format('MMMM Do YYYY, h:mm:ss a'));
        };
    };

})(window.todo = window.todo || {});