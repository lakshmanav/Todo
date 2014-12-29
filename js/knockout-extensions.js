(function (ko) {

    //Strikes the text when invoked
    ko.bindingHandlers.strike = {
        update: function (element, valueAccessor) {
            var value = ko.unwrap(valueAccessor());
            if (value == true) {
                $(element).wrap("<strike></strike>");
            }
            else {
			   if($(element).parent().is('strike'))
			   {
					$(element).unwrap();
			   }
            }
        }
    };

    //Handles the "enter key pressed" event.
    ko.bindingHandlers.enter = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
            var allBindings = allBindingsAccessor();
            $(element).keydown(function (event) {
                var keyCode = (event.which ? event.which : event.keyCode);
                if (keyCode === 13) {
                    var target = event.target;
                    target.blur();
                    allBindings.enter.call(viewModel, event);
                    if (allBindings.reset) {
                        $(element).val('');
                    }
                    if (allBindings.focus) {
                        $(element).focus();
                    }
                    return false;
                }
                return true;
            });
        }
    };

    

})(ko);