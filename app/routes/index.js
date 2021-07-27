import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/files.json');
    const { data } = await response.json();

    return data;
  }
}
