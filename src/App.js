import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';

import Logan from './assets/logan_nobg.svg';

const AppWrapper = styled.div`
  background: red;
  display: flex;
  flex-flow: row-reverse wrap;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  font-family: 'KoHo'
`;

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
`;

const Right = styled.div`
  background: #000;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: ${props => props.windowWidth > 760 ? '50%' : '100%'};
`;

const SocialBar = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-size: ${props => props.windowWidth > 760 ? '30px' : '1.3em'};
  color: #FFF;
  width: ${props => props.windowWidth > 760 ? '50%' : '70%'};
  justify-content: space-around;
  a {
    color: #FFF;
    text-decoration: none;
    :hover {
      color: #7B9EF6;
    }
  }
`;

const Centerpiece = styled.img`
  height: 22em;
  margin-top: -50px;
`;

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
          <h2 style={{ color: '#FFF', fontWeight: '600', fontSize: '36px', margin: '0', padding: '0' }}>Logan Saether</h2>
          <Centerpiece alt="Logan" src={Logan} />
          <SocialBar windowWidth={this.state.windowWidth}>
            {/* Code (GitHub) */}
            <a href="https://github.com/lsaether" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLaptopCode} />
            </a>

            {/* Writing (94arg.com) */}
            <a href="https://medium.com/@lsaether" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faPencilAlt} />
            </a>

            {/* Ethereum Wallet (devops199.eth) */}
            <a href="https://etherscan.io/address/devops199.eth" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEthereum} />
            </a>
          </SocialBar>
        </Right>

        <Left windowWidth={this.state.windowWidth}>
          {/* <h2>Current: </h2>
          <a href="https://convergent.cx" target="_blank" rel="noopener noreferrer">
            <img alt="convergent" src={convergent} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em', marginTop: '-2.5px' }}>Initiator</p>
            
          <a href="https://trustless.design" target="_blank" rel="noopener noreferrer">
            <img alt="trustless" src={trustless} style={{ height: '50px', marginTop: '5px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em', marginTop: '-2.5px' }}>Co-Founder and Auditor</p>

          <h2>Past: </h2>
          <a href="https://chronologic.network" target="_blank" rel="noopener noreferrer">
            <img alt="chronologic" src={chrono} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em', marginTop: '-2.5px' }}>Smart Contract Engineer</p>

          <h2>Recognitions: </h2>
          <a href="https://medium.com/melonport-blog/reinventing-finance-53-hours-and-50-hackers-later-a18bdea1c5c1" target="_blank" rel="noopener noreferrer">
            <img alt="reinvent-finance" src={reinvent} style={{ height: '50px' }} />
          </a>
          <p style={{ fontSize: this.state.windowWidth > 760 ? '0.8em' : '0.7em', marginTop: '-2.5px' }}>Grand Prize Winner</p> */}
        </Left>

      </AppWrapper>
    );
  }
}

export default App;
