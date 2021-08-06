import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const TEMPLATE = hbs`
<FileDownloaderHeader
  @allFiles={{@allFiles}}
  @numSelectedFiles={{this.numSelectedFiles}}
  @updateNumSelectedFiles={{this.updateNumSelectedFiles}}
  @selectedFiles={{this.selectedFiles}}/>`;

module('Integration | Component | file-downloader-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the number of selected files', async function (assert) {
    assert.expect(2);

    this.set('numSelectedFiles', 0);

    await render(TEMPLATE);

    assert.dom('[data-test-number-selected-files]').hasText('None selected');

    this.set('numSelectedFiles', 1);

    await render(TEMPLATE);

    assert.dom('[data-test-number-selected-files]').hasText('Selected 1');
  });

  test('it renders the download button', async function (assert) {
    assert.expect(2);

    await render(TEMPLATE);

    assert.dom('[data-test-download-button]').exists('it renders the button');
    assert.dom('[data-test-download-button]').hasText('Download button');
  });
});
