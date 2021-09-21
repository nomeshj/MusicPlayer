import { arrayExpression, isTemplateElement } from '@babel/types';
import { NavigationContainer } from '@react-navigation/native';
import { forSlideRight } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/HeaderStyleInterpolators';
import React,{Component,useState} from 'react';
import { ActivityIndicator, FlatList, TouchableOpacity, View ,Text, Alert, TextInput,StyleSheet,SafeAreaView,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GetSongs from './GetSongs';
import SoundPlayer from 'react-native-sound-player'
import base64 from 'react-native-base64'


const clientId = 'dd928ebd1e7c4b79a7d2cd18a282fa51';
const clientSecret = '1e0fd6bdfab54e3d8219cbc7124b0bf8';


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item} />
)


class abc extends Component{
    
  constructor(props){
    super(props)
    this.state = {
      len : 20,
      list:'',
      name:[],
      images:[],
      show: false,
      dataSource:[],
      value:'',
      viewSection :false,
      dataAvailable:false,
      token:'',
      encodedToken:''
    }
  }

  getValue =(e)=>{
      this.setState({
            value:e.target.value
      })
  }

  renderBottomComponent(){
    if(this.state.viewSection) {
        return (
            <View>
                
                {this.state.dataSource.map(user=>(
                    // <View style={{flex:0}}>
                    // <View st>
                    // </View>
                    // <View style={{backgroundColor:'blue'}}>
                    // <Text>{user.name}</Text>

                    // </View>
                    // </View>

                    <View style={styles.container} key={user.id}>
                    <View style={styles.imgcon}>
                        {/* <Image
                            source={require({user.album.images[0].url})}

                        /> */}
                        <Image
                            style={styles.tinyLogo}
                            source={{uri:user.album.images[0].url}}
                        />
                    </View>
                    <View style={styles.textCon}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Song : {user.name}</Text>
                    <Text style={{color:'white'}}>Singer : {user.album.artists[0].name}</Text>
                    {/* <Text style={{color:'white'}}>Release Date : {user.total_tracks}</Text> */}
                    {/* <TouchableOpacity
                        
                    >
                        <Text>Play</Text>
                    </TouchableOpacity> */}
                    </View>
            </View>

                  /* <View style={styles.container1}>
                    <View style={styles.rectStack}>
                      <View style={styles.rect}>
                        <View style={styles.rect2}></View>
                      </View>
                      <View style={styles.rect3}>
                          <Text>{user.name}</Text>
                      </View>
                    </View>
                  </View>*/
                ))
            }
            </View>
        )
    }
}
// play=()=>{
//     Alert.alert("play")
//     SoundPlayer.playUrl('https://p.scdn.co/mp3-preview/dd4d8d66b97b6edcb5358135e72620715e1449f9?cid=dd928ebd1e7c4b79a7d2cd18a282fa51')
// }
  componentDidMount=async () =>{

 /*   await fetch('https://api.spotify.com/v1/search?q=STAY&type=track&market=US',{
  method:'GET',
  headers:{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer BQDT0jf8GGCMPebqHs8qImebRh_nDll-UBLNaU6MTIBIInXvmB3p19G78LYL0s2bZc4kJZVtob7LVP4FXT0'
  }
}).then(resp => resp.json())
.then((respjs)=>{
  this.setState({
    dataSource:respjs.tracks.items
  });
  const count = (Object.keys(respjs.tracks.items).length);
  Alert.alert(respjs.tracks.items[0].name)
  Alert.alert(JSON.stringify(count));
})
 */

// {this.state.dataSource.tracks.items.map(item=>(
//   <Text>{item.name}</Text>
// ))

// }

// await fetch('https://api.spotify.com/v1/search?q=STAY&type=track&market=US',{
//     method:'GET',
//     headers:{
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer BQCltbOM-VwYaEAh0FWLWk3HxPlaj9-w_pJQFpamUgWIUGjI6VxDGjX1yywBQwEcU5HgQmPwzM-5mcoGx3s'
//     }
//   }).then(resp => resp.json())
//   .then((respjs)=>{
//     this.setState({
//       dataSource:respjs
//     });


//   })



    
  }

getData=async ()=>{
    
const encoded = base64.encode(clientId+':'+clientSecret);

await fetch('https://accounts.spotify.com/api/token',{
    method:'POST',
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '+encoded
    },
    body: 'grant_type=client_credentials' 
    })
    .then(resp => resp.json())
    .then((respjs)=>{
       this.setState({
           token:respjs.access_token
       });
   
})






  await fetch('https://api.spotify.com/v1/search?q='+this.state.value+'&type=track&market=US',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.state.token
    }
  }).then(resp => resp.json())
  .then((respjs)=>{
    this.setState({
      dataSource:respjs.tracks.items
    });

    //const count = (Object.keys(respjs.tracks.items).length);
    //Alert.alert(respjs.tracks.items[0].name)
    //Alert.alert(JSON.stringify(count));
    //const countString = JSON.stringify(count);
    //const total = parseInt(countString);
   // Alert.alert(total);

 //   this.saveDate();
    //this.renderItem();
    // this.props.navigation.navigate('GetSongs',{data:this.state.value});
    //this.props.navigation.navigate('GetSongs',this.state.value)
   
   // const len = this.state.dataSource.length;
   //Alert.alert(len);
    {this.state.dataSource.map(item => (
        <View>
          <Text>{item.name}</Text>
          <Text>{item.album.images[0].url}</Text>
        </View>
      ))}
   // Alert.alert(this.state.dataSource[0].name)
    this.buttonPress();
  }).catch((error) =>
  Alert.alert("No Record Found")
)
  

}
buttonPress=()=>{
    this.setState({viewSection:true})
}



  render()
  {
    return(
        <View>
          <TextInput
            style={styles.input}
            //onChangeText={this.getValue}
            value={this.state.value}
            onChangeText={(value) => this.setState({ value })}
            placeholder="Enter Song Name"
          />

          <TouchableOpacity
         style={styles.button}
         onPress={this.getData}
         //onPress={this.getData}
         //onPress={()=>this.props.navigation.navigate('GetSongs')}
       >
         <Text>Search</Text>
       </TouchableOpacity>

    <ScrollView>
       {this.state.dataSource.map(ds=>{
            <Text>{ds.name}</Text>
        })}

         
            {this.renderBottomComponent()}
        </ScrollView>
        
        </View>
        
        
    );
  }
}



export default abc;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop:0,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
   // backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  container:{
    flex:0,
    backgroundColor:'#512DA8',
    flexDirection:'row',
    borderWidth:1,
    borderBottomColor:'white'
  },
  textCon:{
   // backgroundColor:'blue',
    position: 'relative',
    //alignItems:'center',
    padding:15
    // justifyContent:'flex-start',
    // alignContent:'flex-start',
    // alignSelf:'flex-end',
    
    
  },
  imgcon:{
    //backgroundColor:'yellow',
    width:100,
    justifyContent:'flex-start',
    alignItems:'center',
    padding:15

  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});