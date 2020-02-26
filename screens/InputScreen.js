import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Body, Content, Form, Textarea, Button } from 'native-base';

const alphabets = {
  A: 'Z', B: 'Y', C: 'X', D: 'W', E: 'V', F: 'U', G: 'T',
  H: 'S', I: 'R', J: 'Q', K: 'P', L: 'O', M: 'N', N: 'M',
  O: 'L', P: 'K', Q: 'J', R: 'I', S: 'H', T: 'G', U: 'F',
  a: 'z', b: 'y', c:'x', d: 'w', e: 'v', f: 'u', g: 't',
  h: 's', i: 'r', j: 'q', k: 'p', l: 'o', m: 'n', n: 'm',
  o: 'l', p: 'k', q: 'j', r: 'i', s: 'h', t: 'g', u: 'f',
  v: 'e', w: 'd', x: 'c', y: 'b', z: 'a'
};

export default class InputScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      resultText: ''
    }
  }

  encryption = async (type, text) => {
    if(text === '')
      return;
    let res = '';
    for(var i=0; i<text.length ; i++) {
      let code = text.charCodeAt(i);

      // check the character for space
      if(code === 32)
        res = res.concat(' ');

      // check the character for line break
      else if(code === 10)
        res = res.concat('\n');

      // for alphabets A-Z | a-z
      else if( (code >= 65 && code <=90) || (code >= 97 && code <=122) )
        res = res.concat(alphabets[text.charAt(i)]);

      else 
        res = res.concat(text.charAt(i));
    }
    await this.setState({resultText: res}, () => {
      this.props.navigation.navigate('Output', {
        type: type,
        text: this.state.resultText
      }
    )});
    this.setState({resultText: ''});
  };

  render() {
    return (
      <Container>
        <Header style={{height: 70}}>
          <Body>
            <Text style={styles.header}>Monoalphabetc Cipher Generator</Text>
          </Body>
        </Header>
        <Content padder>
          <Form>
            <Textarea rowSpan={15} bordered placeholder="Enter text..." 
              selectionColor= '#3F51B5'
              style= {styles.textArea} 
              value= {this.state.inputText}
              onChangeText= {value => this.setState({inputText: value})}
            />
            <View style={styles.btnBorder}>
              <Button rounded style={{flex:1, marginRight: 5}} 
                onPress={()=>{this.encryption('Cipher Text', this.state.inputText)}} >
                <Text style={styles.btnText}>Encrypt</Text>
              </Button>
              <Button rounded style={{flex:1, marginLeft: 5}} 
                onPress={()=>{this.encryption('Plain Text', this.state.inputText)}} >
                <Text style={styles.btnText}>Decrypt</Text>
              </Button>
            </View>
            <Button rounded  style={styles.clr} 
              onPress={()=>{this.setState({inputText: ''})}} >
              <Text style={styles.btnText}>Clear</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 14,
    marginTop: 12
  },
  textArea: {
    fontSize: 18
  },
  btnBorder: {
    flexDirection: 'row',
    marginVertical: 20
  },
  btnText: {
    color: '#fff',
  },
  clr: {
    justifyContent: "center", 
    flex: 1
  }
});
