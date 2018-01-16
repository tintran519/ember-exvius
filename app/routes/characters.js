import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var response = this.store.findAll('character');
    response.then(function(characters) {
      // characters.map(function(c,i){ console.log(c.toJSON()) })
    });
    return response;
  }
});

