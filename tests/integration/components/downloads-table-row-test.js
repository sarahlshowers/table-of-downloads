import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, skip } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<DownloadsTableRow
  @status={{this.status}}
  @isAvailable={{this.isAvailable}}
  @isDisabled={{this.isDisabled}} />`;

module('Integration | Component | downloads-table-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    assert.expect(1);
    await render(TEMPLATE);

    assert.dom('[data-test-table-row]').exists('it renders the table');
  });

  test('the row elements exist', async function (assert) {
    assert.expect(5);

    await render(TEMPLATE);

    assert.dom('[data-test-checkbox]').exists('it renders the checkbox');
    assert.dom('[data-test-file-name]').exists('it renders the file name');
    assert.dom('[data-test-device-name]').exists('it renders the device name');
    assert.dom('[data-test-path]').exists('it renders the file path');
    assert.dom('[data-test-status]').exists('it renders the file status');
  });

  skip('the checkbox is disabled if file status scheduled', async function (assert) {
    assert.expect(2);

    this.set('isAvailable', false);
    this.set('status', 'scheduled');

    await render(TEMPLATE);

    assert.dom('[data-test-checkbox]').isDisabled();

    this.set('isAvailable', true);
    this.set('status', 'available');

    await render(TEMPLATE);

    assert.dom('[data-test-checkbox]').isNotDisabled();
  });

  test('the status indicator shows available files', async function (assert) {
    assert.expect(5);

    this.set('isAvailable', true);
    this.set('status', 'available');

    await render(TEMPLATE);

    assert.dom('[data-test-status]').hasText('available');
    assert.dom('[data-test-status]').exists('it renders the file status');
    assert
      .dom('[data-test-status-indicator]')
      .hasClass('downloads-table-row__status-indicator--isAvailable');

    this.set('isAvailable', false);
    this.set('status', 'scheduled');

    await render(TEMPLATE);

    assert.dom('[data-test-status]').hasText('scheduled');
    assert
      .dom('[data-test-status-indicator]')
      .doesNotHaveClass('it renders the file status');
  });
});
