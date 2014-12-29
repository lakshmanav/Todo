(function (todo) {

    todo.App = function () {
        var self = this;

        self.run = function () {
            var tasksViewModel = new todo.TasksViewModel();
            setInterval(tasksViewModel.updateClock, 100);

            ko.applyBindings(tasksViewModel);
        };
    };

})(window.todo = window.todo || {});