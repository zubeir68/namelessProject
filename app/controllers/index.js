import Controller from '@ember/controller';

export default Controller.extend({

    init() {
        this._super(...arguments);
        this.projects = ["Essay", "Chrome-Extension", "Fun-project"];
        this.labels = ["School", "Private", "Work"];
    }
});
