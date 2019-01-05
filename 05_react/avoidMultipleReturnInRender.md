```js
render() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <SeasonDisplay />
          <div>Error: {this.state.errorMessage}</div>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner message="Waiting location request . ."/>
  }
  ```
  to 
  ```js
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          <SeasonDisplay />
          <div>Error: {this.state.errorMessage}</div>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} />
        </div>
      );
    }
    return <Spinner message="Waiting location request . ." />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
  ```
