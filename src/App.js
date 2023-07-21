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

        <form action="" method="get" className="form-example">
          <div className="form-example">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="form-example">
            <label htmlFor="email">Enter your email: </label>
            <input type="email" name="email" id="email"/>
          </div>
          <div className="form-example">
            <input type="submit" value="Subscribe!"/>
          </div>
        </form>
      </header>
      <div class='content'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero. Sit amet venenatis urna cursus eget nunc scelerisque. Cursus risus at ultrices mi tempus. Pretium quam vulputate dignissim suspendisse in est ante in. Consequat interdum varius sit amet. Malesuada proin libero nunc consequat. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae purus faucibus ornare suspendisse. Congue eu consequat ac felis donec et. Augue eget arcu dictum varius duis at. Amet justo donec enim diam vulputate ut.
        </p><p>
          Tempor commodo ullamcorper a lacus vestibulum sed arcu. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Tortor consequat id porta nibh venenatis cras. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Nisl pretium fusce id velit ut tortor pretium viverra. Facilisi nullam vehicula ipsum a arcu cursus vitae. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Viverra nam libero justo laoreet. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Aliquet nibh praesent tristique magna sit. Risus quis varius quam quisque id diam vel quam. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. In ante metus dictum at tempor commodo ullamcorper a. Augue neque gravida in fermentum. Vulputate dignissim suspendisse in est ante. Quisque non tellus orci ac auctor. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
      </p><p>
          Dui faucibus in ornare quam viverra orci sagittis. Auctor urna nunc id cursus. Gravida dictum fusce ut placerat orci nulla pellentesque. At augue eget arcu dictum. In massa tempor nec feugiat nisl. A lacus vestibulum sed arcu. Amet risus nullam eget felis eget nunc lobortis mattis. Gravida quis blandit turpis cursus in hac habitasse. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Lacus laoreet non curabitur gravida. Neque convallis a cras semper auctor. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Quam id leo in vitae. Sit amet facilisis magna etiam tempor orci eu. Malesuada fames ac turpis egestas integer eget aliquet. Aenean vel elit scelerisque mauris pellentesque pulvinar. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.
      </p><p>
          Ac odio tempor orci dapibus. Quam nulla porttitor massa id neque aliquam. Imperdiet massa tincidunt nunc pulvinar. A scelerisque purus semper eget duis. Et magnis dis parturient montes nascetur ridiculus mus. Tellus mauris a diam maecenas sed enim ut sem. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Amet nisl purus in mollis nunc sed id semper. Sagittis aliquam malesuada bibendum arcu vitae elementum. Tellus id interdum velit laoreet id donec ultrices tincidunt. Et malesuada fames ac turpis egestas integer eget. Vulputate enim nulla aliquet porttitor. Cras pulvinar mattis nunc sed blandit libero volutpat.
      </p><p>
          At risus viverra adipiscing at. Nascetur ridiculus mus mauris vitae. Eu turpis egestas pretium aenean. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Purus in mollis nunc sed id semper. Auctor urna nunc id cursus metus aliquam eleifend mi in. Lectus urna duis convallis convallis tellus. Hendrerit dolor magna eget est lorem ipsum dolor sit. Dolor sit amet consectetur adipiscing elit. Aliquet lectus proin nibh nisl condimentum. Urna condimentum mattis pellentesque id nibh. Dui id ornare arcu odio. Dictumst quisque sagittis purus sit amet. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Leo urna molestie at elementum eu. Amet aliquam id diam maecenas ultricies mi eget.</p>
        <form action="" method="get" className="form-example">
          <div className="form-example">
            <label htmlFor="name">Enter your name: </label>
            <input type="text" name="name" id="name"/>
          </div>
          <div className="form-example">
            <label htmlFor="email">Enter your email: </label>
            <input type="email" name="email" id="email"/>
          </div>
          <div className="form-example">
            <input type="submit" value="Subscribe!"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
