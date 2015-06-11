StatsKeeper.NewGameController = Ember.Controller.extend({
  actions: {
    add: function() {
      var newGame = this.store.createRecord('game', {
        name: this.get('name')
      });
      newGame.save();
      this.transitionToRoute('games')
    }
  }
});
