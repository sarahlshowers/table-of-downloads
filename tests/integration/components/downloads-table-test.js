import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
  <DownloadsTable
  @allFiles={{this.allFiles}}
  @numSelectedFiles={{this.numSelectedFiles}}
  @updateNumSelectedFiles={{this.updateNumSelectedFiles}}
  @updateListOfDownloads={{this.updateListOfDownloads}}
  @selectedFiles={{this.selectedFiles}}/>`;

module('Integration | Component | downloads-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the table header', async function (assert) {
    assert.expect(1);

    await render(TEMPLATE);

    assert
      .dom('[data-test-downloads-table-header-row]')
      .exists('it renders the table header');
  });

  test('it renders table rows', async function (assert) {
    assert.expect(1);

    const model = [
      {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
      },
      {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
      },
    ];

    this.set('allFiles', model);

    await render(TEMPLATE);

    assert.dom('[data-test-table-row]').exists('it renders table rows');
  });
});
