import Route from '@ember/routing/route';

export default Route.extend({
    model() {
       return this.store.findAll('tasks');
    }
});
/**
 * TODO:
 * - ADD CONTROLLER AND PUT ACTIONS AND LIST FOR NOW UNTIL FIXED MIRAGE
 */