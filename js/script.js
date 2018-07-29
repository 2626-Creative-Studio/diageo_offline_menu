var app = angular.module('offline-menu', []);

app.controller('menuCtrl', function ($scope) {
	console.log('menu is working...');
	$scope.menu = [
		{
			name: "option1",
			items_list: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
		},
		{
			name: "option2",
			items_list: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
		},
		{
			name: "option3",
			items_list: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
		},
		{
			name: "option4",
			items_list: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
		},
		{
			name: "option5",
			items_list: ["item1", "item2", "item3", "item4", "item5", "item6", "item7"]
		}
	];
});
