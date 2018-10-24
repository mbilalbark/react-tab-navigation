import React from 'react'
import {View,TouchableOpacity,Image} from 'react-native'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: null
        };
    }

  render() {
      return(
          <View 
            style={{backgroundColor:'#ff7e6b'}}
          > 
            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate('Detail',{asd:'https://i2.wp.com/lbc9.net/movies-and-tv/movie/dark-knight/the-dark-knight-poster-hd-wallpaper.jpg?resize=618%2C348'})}
            > 
                <Image
                    style={{width: 250, height: 150,margin:5}}
                    source={{uri: 'https://i2.wp.com/lbc9.net/movies-and-tv/movie/dark-knight/the-dark-knight-poster-hd-wallpaper.jpg?resize=618%2C348'}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail',{asd:'https://images5.alphacoders.com/945/thumb-350-945699.jpg'})}
            >
                <Image
                    style={{width: 250, height: 150,margin:5}}
                    source = {{uri:'https://images5.alphacoders.com/945/thumb-350-945699.jpg'}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Detail',{asd:'https://i.blogs.es/811fce/disney-pixar-up-539902/450_1000.jpg'})}
            > 
                <Image
                    style={{width: 250, height: 150, margin:5}}
                    source = {{uri:'https://i.blogs.es/811fce/disney-pixar-up-539902/450_1000.jpg'}}
                />
            </TouchableOpacity>
          </View>
      )
  }
}
export default Home