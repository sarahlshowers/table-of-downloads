import Component from '@glimmer/component';
import { action } from '@ember/object';
import { map } from '@ember/object/computed';

export default class FileDownloaderHeader extends Component {
  numAvailableDownloads = 0;

  constructor() {
    super(...arguments);

    const allFiles = this.args.allFiles;

    // allFiles.map(file) => {
    //   if (file.status === 'available') {

    //     return this.numAvailableDownloads += 1;
    //   }
    // }
    // this.numFilesAvailableForDownload();
  }

  // @map('this.args.allFiles', function(file, index) {
  //         if (file.status === 'available') {

  //       return this.numAvailableDownloads += 1;
  //     }
  // })

  // @action
  // handleCheckboxInteraction() {
  //   const headerCheckbox = document.getElementById('headerCheckbox');
  //   const foo = this.args.numSelectedFiles;
  //   debugger;

  //   // select all if none or some are selelcted

  //   //de-select all is all are selected
  //     // number of available files = numselected files
  // }
}
