import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import UserTable from './components/UserTable';
import AddUser from './components/AddUser';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header title='Users' />
          </Col>
        </Row>

        <Row>
          <Col>
          <UserTable users={this.props.users} />
          </Col>
        </Row>

        <Row>
          <Col>
            <AddUser />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  }
}

export default connect(mapStateToProps)(App);
