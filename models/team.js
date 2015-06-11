StatsKeeper.Team = DS.Model.extend({
  teamName: DS.attr(),
  game: DS.belongsTo('game', {async: true})
});
