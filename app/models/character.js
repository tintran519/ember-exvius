import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rarity: DS.attr('number'),
  resistances: DS.attr()
});
