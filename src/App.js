import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Website</h1>
        <a href={'https://example.com/'} target={'_blank'} rel='noreferrer'>
          <p className={'link'} id={'link'}>Link to Example webpage</p>
        </a>
        <a href={'#updated'}>
          <p className={'link'} id={'queryParam'}>Click to update queryParams</p>
        </a>
      </header>
    </div>
  );
}

export default App;
