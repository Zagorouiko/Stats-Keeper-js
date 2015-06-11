StatsKeeper.NewTeamController = Ember.Controller.extend({
  needs: ['game'],
  actions: {
    add: function() {
      var newTeam = this.store.createRecord('team', {
        teamName: this.get('teamName')
      });
      newTeam.save();
      var game = this.get('controllers.game.model');
      game.get('teams').pushObject(newTeam);
      game.save();

      this.transitionToRoute('game', game.id);
    }
  }
});
