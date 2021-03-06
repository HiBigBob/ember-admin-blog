import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return Ember.RSVP.hash({
			posts: this.store.findAll('post'),
			tags: this.store.findAll('tag')
		});
  	}
});
