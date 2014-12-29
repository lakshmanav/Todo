(function (todo) {

    todo.App = function () {
        var self = this;

        self.run = function () {
		    var tasks = ko.utils.parseJson(window.localStorage.getItem('myCheckList.Tasks'));
            var taskCollection = new todo.TaskCollection(tasks);
            setInterval(taskCollection.updateClock, 100);

            ko.applyBindings(taskCollection);
        };
    };

})(window.todo = window.todo || {});