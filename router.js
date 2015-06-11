StatsKeeper.Router.map(function() {
  this.resource('games', {path: '/'}, function(){
    this.resource('new-game');
  });
  this.resource('game', {path: 'game/:game_id'}, function() {
    this.resource('new-team');
  })
});
