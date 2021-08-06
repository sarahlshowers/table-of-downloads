import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<FileDownloader
  @allFiles={{this.allFiles}}
  @numSelectedFiles={{this.numSelectedFiles}}
  @numFilesAvailable={{this.numFilesAvailable}}
  @selectedFiles={{this.selectedFiles}} />`;

module('Integration | Component | file-downloader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the downloads table components', async function (assert) {
    assert.expect(2);

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

    assert
      .dom('[data-test-file-downloader-header]')
      .exists('it renders the header');
    assert.dom('[data-test-downloads-table]').exists('it renders the table');
  });
});
