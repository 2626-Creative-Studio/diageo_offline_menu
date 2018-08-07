var app = angular.module('offline-menu', []);

app.controller('menuCtrl', function ($scope) {
	console.log('menu is working...');

	//$('#myModal4').modal();

	$(document).keydown(function (event) {
		if (event.keyCode == 27) {
			console.log('Escape Key Pressed');
			$('.modal').modal({ keyboard: true });
			$('.modal').modal("hide");
		}
	});

	$(".modal").on("shown.bs.modal", function () {
		$(".modal").addClass("animated zoomIn");
	});

	$(".modal").on("hidden.bs.modal", function () {
		//$(".modal").addClass("animated zoomOut");
	});

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
