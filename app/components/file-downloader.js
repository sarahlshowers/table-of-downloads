import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileDownloader extends Component {
  @tracked
  numSelectedFiles;

  @tracked
  numFilesAvailable;

  @tracked
  selectedFiles = [];

  constructor() {
    super(...arguments);

    const allFiles = this.args.allFiles;
    let availableCounter = 0;

    this.numSelectedFiles = 0;
    this.numFilesAvailable = allFiles.map((file) => {
      if (file.status === 'available') {
        return (availableCounter += 1);
      }
    });
  }

  @action
  updateNumSelectedFiles(newNumOfFiles) {
    this.numSelectedFiles = newNumOfFiles;
    this.setHeaderCheckboxIndeterminateState();
  }

  @action
  updateListOfDownloads(updatedList) {
    this.selectedFiles = updatedList;
  }

  setHeaderCheckboxIndeterminateState() {
    const headerCheckbox = document.getElementById('headerCheckbox');

    if (
      this.numSelectedFiles === 0 ||
      this.numSelectedFiles === this.numFilesAvailable
    ) {
      return (headerCheckbox.indeterminate = false);
    } else {
      return (headerCheckbox.indeterminate = true);
    }
  }
}
