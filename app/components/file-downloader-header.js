import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileDownloaderHeader extends Component {
  @tracked
  allFiles;

  constructor() {
    super(...arguments);
    this.allFiles = this.args.allFiles;
  }

  @action
  handleCheckboxInteraction() {
    const headerCheckbox = document.getElementById('headerCheckbox');

    if (headerCheckbox.checked || headerCheckbox.indeterminate) {
      return this.allFiles.map((file) => {
        const checkboxEl = document.getElementById(file.id);
        if (file.status === 'available') {
          return (checkboxEl.checked = true);
        }
      });
    } else {
      return this.allFiles.map((file) => {
        const checkboxEl = document.getElementById(file.id);
        if (file.status === 'available') {
          return (checkboxEl.checked = false);
        }
      });
    }
  }

  @action
  downloadFiles() {
    const foo = this.args.selectedFiles;
    const files = this.allFiles;
    const list = [];
    let alertMessage;

    foo.map((el) => {
      const file = files.findBy('id', el);
      const fileInfo = `- ${file.device} ${file.path}\n`;
      list.push(fileInfo);
    });

    alertMessage = list;

    console.log(list);
    alert(alertMessage);
  }
}
