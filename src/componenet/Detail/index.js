import React from 'react' 
import {View,Image} from 'react-native'
const url = null;
class Detail extends React.Component {
state = {
    url:null,
}
static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  };

componentWillMount() {
  this.setState({url:this.props.navigation.state.params.url}) 
  console.log(this.props.navigation)
}

    render() {
        return(
            <View>
                <Image
                    style={{width: 250, height: 150,margin:5, marginLeft:50}}
                    source = {{uri:this.state.url}}
                />
            </View>
        )
    }
}
export default Detail