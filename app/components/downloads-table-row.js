import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DownloadsTableRow extends Component {
  @tracked
  isDisabled;

  @tracked
  numSelectedFiles = this.args.numSelectedFiles;

  constructor() {
    super(...arguments);

    this.currentItemId = this.index;
    this.fileName = this.args.fileName;
    this.device = this.args.device;
    this.path = this.args.path;
    this.status = this.args.status;

    this.isDownloadAvailable();
  }

  isDownloadAvailable() {
    if (this.status === 'available') {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  @action handleCheckboxInteraction() {
    const idString = `row${this.args.fileId}`;
    const inputEl = document.getElementById(this.args.fileId);
    const rowEl = document.getElementById(idString);

    if (inputEl.checked) {
      this.args.updateNumSelectedFiles((this.numSelectedFiles += 1));
      rowEl.classList.add('downloads-table-row--is-checked');
    } else {
      this.args.updateNumSelectedFiles((this.numSelectedFiles -= 1));
      rowEl.classList.remove('downloads-table-row--is-checked');
    }
  }
}
