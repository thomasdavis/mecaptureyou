import React from 'react'
import ReactDOM from 'react-dom';
import { styled } from 'styletron-react'

import Page from '../layouts/main';
import withData from '../lib/withData';
import { Button } from '../styles'

import { gql, graphql } from 'react-apollo'

const LoginWrapper = styled('div', (props) => ({
  width: '500px',
  margin: 'auto',
  paddingTop: '100px'
}));

const LoginInput = styled('input', (props) => ({
  heigt: '60px',
  width: '100%',
  lineHeight: '60px',
  margin: 'auto',
  'text-align': 'center',
  fontSize: '18px',
  ':focus': {
    outline: 'none',
  }
}));

const LoginMessage = styled('div', (props) => ({
  heigt: '60px',
  width: '100%',
  lineHeight: '60px',
  margin: 'auto',
  'text-align': 'center',
  fontSize: '20px'
}));
const LoginSmiley = styled('span', (props) => ({
  fontSize: '140px'
}));
const loginGql = gql`
  mutation login ($email: String!)  {
    login(email: $email)
  }
`
class LoginComponent extends React.Component {
  constructor () {
    super();
    this.login = this.login.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.state = {
      email: '',
      submitted: false,
    }
  }
  componentDidMount () {
    document.querySelector('input').focus();
  }
  onKeyPress (e) {
    if (e.key === 'Enter') {
      this.login();
      this.setState({
        email: e.target.value,
        submitted: true,
      })
      this.setState({
        email: e.target.value,
      })
    }
  }
  checkAuth() {
   this.props.client.query({
     query: gql`query {
         hello
       }`,
     variables: {},
   });
  }
  login () {
    const {email} = this.state;
    this.checkAuth();
    // this.props.login(email);
  }
  render () {
    const {submitted} = this.state;
    const {token} = this.props;
    return <div>
        {token}
        {!submitted ? <LoginInput onKeyPress={this.onKeyPress} placeholder="Enter your email to login/signup" type="text" ref="email" />
         : <LoginMessage><LoginSmiley>🤗</LoginSmiley><br /><br />Check your inbox!</LoginMessage>}
      </div>
  }
}
const LoginComponentGql = graphql(loginGql, {
 props: ({ ownProps, mutate }) => ({
   login: (email) => mutate({
     variables: { email },
     optimisticResponse: {
       login: {
         email: ownProps.email,
       }
     }
   })
 })
})(LoginComponent);

// mutation login ($email: String!)  {
//   login(email: $email)
// }
const autql = gql`
  query auth($token: String!) {
    auth(token: $token) {
      status
    }
  }
`
class AutComponent extends React.Component {
  constructor () {
    super();
  }

  render () {
    console.log(this.props);
    return <div>
    asdadasd
      </div>
  }
}

const AutComponentGql = graphql(autql, {
  options: {
    variables: {
      token: 'asdasdasd',
    }
  },
})(AutComponent);

function LoginForm ({ data, token }) {
  console.log(data);
  return <div>
    {token}
    <AutComponentGql />
    {/* <LoginComponentGql token={token} /> */}
  </div>
}

const allPosts = gql`
  query {
    hello
  }
`

const LoginFormComponent = graphql(allPosts, {
  options: {
    variables: {
    }
  },
  props: ({ data, ownProps }) => {
  return {data, token: ownProps.token}},
})(LoginForm)

export default withData((props) => {
  const {token} = props.url.query;
  return <Page>
    <LoginWrapper>
      <LoginForm token={token} />
    </LoginWrapper>
  </Page>
});
// export default withData((props) => {
//   const {token} = props.url.query;
//   return <Page>
//     <LoginWrapper>
//       <LoginFormComponent token={token} />
//     </LoginWrapper>
//   </Page>
// });
