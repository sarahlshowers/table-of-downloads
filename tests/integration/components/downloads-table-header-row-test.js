import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`<DownloadsTableHeaderRow />`;

module(
  'Integration | Component | downloads-table-header-row',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      assert.expect(1);

      await render(TEMPLATE);

      assert
        .dom('[data-test-downloads-table-header-row]')
        .exists('it renders the header row for the table');
    });
  }
);
