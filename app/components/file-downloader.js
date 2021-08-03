import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileDownloader extends Component {
  @tracked
  numSelectedFiles;

  @tracked
  numFilesAvailable;

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

    // debugger;
  }

  @action
  updateNumSelectedFiles(newNumOfFiles) {
    this.numSelectedFiles = newNumOfFiles;
    this.setHeaderCheckboxIndeterminateState();
  }

  setHeaderCheckboxIndeterminateState() {
    const headerCheckbox = document.getElementById('headerCheckbox');
    // debugger;

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
