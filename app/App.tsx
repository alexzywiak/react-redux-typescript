import * as React from 'react';
import FlashMessage from './components/flash_message';
import UserButtons from './components/user_buttons';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <p>I am an app</p>
        <FlashMessage />
        <UserButtons />
      </div>
    );
  }
};
