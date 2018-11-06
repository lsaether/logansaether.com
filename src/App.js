import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

import logan from './logan_nobg.svg';
import reinvent from './reinvent.png';
import chrono from './chrono.png';
import trustless from './trustless.png';
import blockchain from './blockchain.jpeg';

const AppWrapper = styled.div`
  background: red;
  display: flex;
  flex-flow: row-reverse wrap;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-family: 'KoHo'
`

const Left = styled.div`
  background: #FFF;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: ${props => props.windowWidth > 760 ? '50%' : '100%'};
  a {
    color: #7B9EF6;
    text-decoration: none;
    :hover {
      color: #3B00FF;
    }
  }
`
const Right = styled.div`
  background: #000;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: ${props => props.windowWidth > 760 ? '50%' : '100%'};
`

const SocialBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: ${props => props.windowWidth > 760 ? '1.6em' : '1.3em'};
  color: #FFF;
  width: ${props => props.windowWidth > 760 ? '50%' : '70%'};
  padding-bottom: 5%;
  justify-content: space-around;
  a {
    color: #FFF;
    text-decoration: none;
    :hover {
      color: #7B9EF6;
    }
  }
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: window.innerWidth,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    return (
      <AppWrapper>

        <Right windowWidth={this.state.windowWidth}>
          <h2 style={{ color: '#FFF' }}>Logan Saether</h2>
          <img src={logan} style={{ height: '18em', paddingBottom: '10%' }} />
          <SocialBar windowWidth={this.state.windowWidth}>
            {/* Code (GitHub) */}
            <a href="https://github.com/lsaether">
              <FontAwesomeIcon icon={faLaptopCode} />
            </a>

            {/* Writing (94arg.com) */}
            <a href="https://medium.com/@lsaether">
              <FontAwesomeIcon icon={faPencilAlt} />
            </a>

            {/* Ethereum Wallet (devops199.eth) */}
            <a href="https://etherscan.io">
              <FontAwesomeIcon icon={faEthereum} />
            </a>
          </SocialBar>
        </Right>

        <Left windowWidth={this.state.windowWidth}>
          <h2>Current: </h2>
          <a href="https://en.wikipedia.org/wiki/Blockchain">
            <img src={blockchain} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em' }}>Blockchain Entreprenuer</p>
            
          <a href="https://trustless.design">
            <img src={trustless} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em' }}>Co-Founder and Auditor</p>

          <h2>Past: </h2>
          <a href="https://chronologic.network">
            <img src={chrono} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em' }}>Smart Contract Engineer</p>

          <h2>Recognitions: </h2>
          <a href="https://medium.com/melonport-blog/reinventing-finance-53-hours-and-50-hackers-later-a18bdea1c5c1">
            <img src={reinvent} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em' }}>Grand Prize Winner</p>
        </Left>

      </AppWrapper>
    );
  }
}

export default App;
