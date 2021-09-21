import React,{ Component } from "react";
import { View,Text, Alert } from "react-native";


// export default class GetSongs extends React.Component  {
    
//     constructor(props){
//         super(props);
//     }
//     componentDidUpdate(prevProps) {
//         const value = navigation.getParam('data');
//         Alert.alert(value);
//       }
    
//     render(){
//        // const {navigation} = this.props;
//         // const value = navigation.getParam('data')
//         //const value = navigation.getParam('data','no data ');
//         return(
//                 <View>
//                     <Text>hello</Text>
//                     {/* <Text>typed value {this.props.navigation.params.data}</Text> */}
//                     <Text>{props.route.params.data}</Text>
//                     {/* <Text>{this.props.route.params.p1}</Text> */}
//                     {/* <Text>{value}</Text> */}
//                       {/* <Text>{JSON.stringify(data)}</Text>   */}
//                 </View>
//         );
//     }
    
// }

const GetSongs =(props)=>{
    return(
        <Text>{props.data}</Text>
    );
} 
export default GetSongs;









// import React,{ Component } from "react";
// import { View,Text } from "react-native";


// const GetSongs =(props)=>{
//     const{data} = props.params;
//         return(
//                 <View>
//                     <Text>hello</Text>
//                       <Text>{JSON.stringify(data)}</Text>  
//                 </View>
//         );
    
// }

// export default GetSongs;