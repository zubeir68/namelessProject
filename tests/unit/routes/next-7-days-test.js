import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | next-7-days', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:next-7-days');
    assert.ok(route);
  });
});
