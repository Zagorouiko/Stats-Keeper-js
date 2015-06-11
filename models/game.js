StatsKeeper.Game = DS.Model.extend({
  name: DS.attr(),
  teams: DS.hasMany('team', {async: true})
});
