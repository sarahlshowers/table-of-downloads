import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DownloadsTableRow extends Component {
  @tracked
  isDisabled;

  @tracked
  numSelectedFiles = this.args.numSelectedFiles;

  @tracked
  isAvailable;

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
      this.isAvailable = true;
    } else {
      this.isDisabled = true;
      this.isAvailable = false;
    }
  }

  updateDownloadsList(id) {
    let fileList = this.args.selectedFiles;

    if (fileList.includes(id)) {
      const newList = fileList.without(id);
      return this.args.updateListOfDownloads(newList);
    } else {
      fileList.push(id);
      return this.args.updateListOfDownloads(fileList);
    }
  }

  @action handleCheckboxInteraction() {
    const idString = `row${this.args.fileId}`;
    const inputEl = document.getElementById(this.args.fileId);
    const rowEl = document.getElementById(idString);

    const allCheckboxes = document.getElementsByClassName(
      'downloads-table-row__checkbox'
    );

    if (inputEl.checked) {
      this.args.updateNumSelectedFiles((this.numSelectedFiles += 1));
      this.updateDownloadsList(this.args.fileId);
      rowEl.classList.add('downloads-table-row--is-checked');
    } else {
      this.args.updateNumSelectedFiles((this.numSelectedFiles -= 1));
      this.updateDownloadsList(this.args.fileId);
      rowEl.classList.remove('downloads-table-row--is-checked');
    }

    this.numSelectedFiles = 0;
    for (let i = 0; i < allCheckboxes.length; i++) {
      if (allCheckboxes[i].checked) {
        this.numSelectedFiles += 1;
      }
    }
    return this.args.updateNumSelectedFiles(this.numSelectedFiles);
  }
}
