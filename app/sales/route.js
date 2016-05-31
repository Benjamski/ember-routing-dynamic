import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        idNum: 1,
        name: 'Billy Bo',
      },
      {
        idNum: 2,
        name: 'Lil Roberto',
      },
      {
        idNum: 3,
        name: 'Sassy Sally',
      },
    ];
  }
});
