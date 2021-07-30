import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileDownloader extends Component {
  @tracked
  numSelectedFiles;

  constructor() {
    super(...arguments);
    this.numSelectedFiles = 0;
  }

  @action
  updateNumSelectedFiles(newNumOfFiles) {
    this.numSelectedFiles = newNumOfFiles;
  }
}
