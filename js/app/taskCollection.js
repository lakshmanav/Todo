(function(todo) {

    todo.TaskCollection = function (tasks) {
        var self = this;

        self.tasks = ko.observableArray(ko.utils.arrayMap(tasks, function(task) {
            return new todo.Task(task.description, task.isCompleted);
        }));

        self.addTask = function() {
            self.tasks.push(new todo.Task(self.taskDescription(), false));
        };

        self.removeTask = function() {
            self.tasks.remove(this);
        };
		
		self.removeAllTasks = function() {
			self.tasks.removeAll();
		};

        self.taskDescription = ko.observable();

        self.dateTimeNow = ko.observable(moment().format('MMMM Do YYYY, h:mm:ss a'));
        self.updateClock = function() {
            self.dateTimeNow(moment().format('MMMM Do YYYY, h:mm:ss a'));
        };
		
		ko.computed(function(){
			window.localStorage.setItem('myCheckList.Tasks', ko.toJSON(self.tasks));
		});
    };

})(window.todo = window.todo || {});