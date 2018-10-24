import React from 'react' 
import {View,Image} from 'react-native'
const url = null;
class Detail extends React.Component {
state = {
    url:null
}
componentWillMount() {
  this.setState({url:this.props.navigation.state.params.asd}) 
  console.log(url)
}

    render() {
        return(
            <View>
                <Image
                    style={{width: 250, height: 150,margin:5}}
                    source = {{uri:this.state.url}}
                />
            </View>
        )
    }
}
export default Detail