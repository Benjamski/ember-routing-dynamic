import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Poop Pot',
        manufacturer: 'Farberware',
        price: 40
      },
      {
        id: 2,
        name: 'Poop Processor',
        manufacturer: 'Cuisinart',
        price: 25
      },
      {
        id: 3,
        name: 'Poop Griddle',
        manufacturer: 'George Foreman Grills Poop',
        price: 15
      },
    ];
  }
});
