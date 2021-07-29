import Component from '@glimmer/component';

export default class DownloadsTableRow extends Component {
  constructor() {
    super(...arguments);

    this.fileName = this.args.fileName;
    this.device = this.args.device;
    this.path = this.args.path;
    this.status = this.args.status;
  }
}
