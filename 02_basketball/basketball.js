(function WeeklyGameSummary()
{
	// Make a request to our endpoint
	$.getJSON("https://rawgit.com/brad-jones/nodecodingtest/master/02_basketball/data/thisweek.json", function(data)
	{
		// Loop through each of the games
		$.each(data.games, function(key, url)
		{
			// Request the games details
			$.getJSON(url, function(game)
			{
				// Output the game summary
				console.log
				(
					game.teams[0].name + ' ' + game.teams[0].score +
					' - ' +
					game.teams[1].name + ' ' + game.teams[1].score
				);
			});
		});
	});
})();
