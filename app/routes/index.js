import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/api/files.json');
    const { data } = await response.json();

    for (let i = 0; i < data.length; i++) {
      data[i]['id'] = i;
    }

    return data;
  }
}
