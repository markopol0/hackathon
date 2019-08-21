import React from 'react';
import './App.css';
import People from './People';
import Dogs from './Dogs';
import Groups from './Groups';
import Events from './Events';
import Quiz from './Quiz';
import Snacks from './Snacks';
import Detail from './Detail';
import Categories from './Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: "categories",
      data: "",
      search: ""
    }
  }

  componentDidMount() {
  }
  handleClickSection = (section, data = "") => () => {
    this.setState({ section })
  }
  render() {
    const { section, data, search } = this.state;
    return (
      <div className="App">
        <div className="App-header-wrapper">
          <div className="App-header">
            <div className="Home-link" onClick={() => this.setState({ section: "categories" })}>
              Home
            </div>
            {section === "people" &&
              <input placeholder="Search" className="Search-box" value={search} onChange={e => this.setState({ search: e.target.value })}/>
            }
          </div>
        </div>
        {section === "people" &&
          <People handleClickSection={this.handleClickSection} search={search}/>
        }
        {section === "dogs" &&
          <Dogs handleClickSection={this.handleClickSection} />
        }
        {section === "groups" &&
          <Groups handleClickSection={this.handleClickSection} />
        }
        {section === "events" &&
          <Events handleClickSection={this.handleClickSection} />
        }
        {section === "quiz" &&
          <Quiz handleClickSection={this.handleClickSection} />
        }
        {section === "snacks" &&
          <Snacks handleClickSection={this.handleClickSection} />
        }
        {section === "detail" &&
          <Detail handleClickSection={this.handleClickSection} detailObj={data} />
        }
        {section === "categories" &&
          <Categories handleClickSection={this.handleClickSection} />
        }

      </div>
    );
  }
}

export default App;
