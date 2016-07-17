import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path: '/aboutMe'});
  this.route('info', function(){
    this.route('location');
    this.route('job');
  });
  this.route('page-not-found', {path: '/*wildcard' });
});

export default Router;
