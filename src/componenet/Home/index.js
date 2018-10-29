import React from 'react'
import {View,TouchableOpacity,Image} from 'react-native'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: null
        };
    }

    static navigationOptions = {
          title: 'Home'
      };

  render() {
      return(
          <View 
            style={{backgroundColor:'#ff7e6b'}}
          > 
          <View style={{marginLeft:50}}>
            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate('Detail',{url:'https://i2.wp.com/lbc9.net/movies-and-tv/movie/dark-knight/the-dark-knight-poster-hd-wallpaper.jpg?resize=618%2C348',title:'Batman'})}
            > 
                <Image
                    style={{width: 250, height: 150,margin:5}}
                    source={{uri: 'https://i2.wp.com/lbc9.net/movies-and-tv/movie/dark-knight/the-dark-knight-poster-hd-wallpaper.jpg?resize=618%2C348'}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail',{url:'https://amp.businessinsider.com/images/5bb4cb617654532cc377da8c-750-500.jpg',title:'Venom'})}
            >
                <Image
                    style={{width: 250, height: 150,margin:5}}
                    source = {{uri:'https://amp.businessinsider.com/images/5bb4cb617654532cc377da8c-750-500.jpg'}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Detail',{url:'https://i.blogs.es/811fce/disney-pixar-up-539902/450_1000.jpg',title:'Up'})}
            > 
                <Image
                    style={{width: 250, height: 150, margin:5}}
                    source = {{uri:'https://i.blogs.es/811fce/disney-pixar-up-539902/450_1000.jpg'}}
                />
            </TouchableOpacity>
            </View>
          </View>
      )
  }
}
export default Home