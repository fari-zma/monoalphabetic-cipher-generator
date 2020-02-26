import React from 'react';
import { StyleSheet, Text, Clipboard, Alert } from 'react-native';
import { Container, Header, Left, Icon, Body, Content, Card, CardItem, Button } from 'native-base';

export default class OutputScreen extends React.Component {
  
  render() {

    const textType = this.props.navigation.getParam('type', '');
    const resultText = this.props.navigation.getParam('text', '');

    return (
      <Container>
        <Header style={{height: 70}}>
        <Left>
          <Button transparent onPress={()=>{this.props.navigation.goBack()}} >
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Text style={styles.header}>Monoalphabetc Cipher Generator</Text>
          </Body>
        </Header>
        <Content>
        <Card style={styles.card}>
            <CardItem header>
              <Text style={styles.cardHeader}>{textType}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text onLongPress={() => {
                    Clipboard.setString(resultText);
                    Alert.alert('Text copied to the clipboard');
                  }
                }
                style={styles.cardBody}>{resultText}</Text>
              </Body>
            </CardItem>
         </Card>
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
  card: {
    marginHorizontal: 10
  },
  cardHeader: {
    fontSize: 20, fontWeight: 'bold'
  },
  cardBody: {}
});
