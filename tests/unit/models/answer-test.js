import { moduleForModel, test } from 'ember-qunit';

moduleForModel('answer', 'Unit | Model | answer', {
  // Specify the other units that are required for this test.
  needs: ['model:question', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
