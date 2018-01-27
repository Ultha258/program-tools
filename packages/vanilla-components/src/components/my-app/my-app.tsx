import { Component, Prop, State } from '@stencil/core';

const API:MyAPI = window['WidgetHost'];

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop() user: string;
  @State() id: string;

  componentWillLoad() {
    if(API) {
      API.graphql.getCurrentUser().then((res) => {
        this.id = res.data.feed[0].repository.full_name;
      });
    }
  }

  componentDidLoad() {
    if (API) {
      API.analytics.loadEvent();
    }
  }

  handleClick(event: UIEvent) {
    API.ui.close();
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          {this.user} is a contributor in repository {this.id}

          <button onClick={this.handleClick.bind(this)}>Close popup!</button>
        </main>
      </div>
    );
  }
}