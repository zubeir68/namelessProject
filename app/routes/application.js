import Route from '@ember/routing/route';
import { computed } from '@ember/object';


export default Route.extend({
    model() {
        return {
            projects: computed(() => {
                return this.store.findAll('project');
            }),
            labels: computed(() => {
                return this.store.findAll('label'); 
            })
        }
    },

    beforeModel: function() {
        this.transitionTo('tasks');
    }
});
