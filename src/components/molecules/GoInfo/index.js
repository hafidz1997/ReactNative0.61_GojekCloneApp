import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoInfo = () => {
    return(
<View style={{padding:16, paddingBottom:0}}>
            <View style={{height:15, width:60, marginLeft:-4}}>
                <Image source={require('../../../assets/logo/gojek.png')} style={{width:undefined,
                    height:undefined, resizeMode:'contain', flex:1}}/>
            </View>
            <Text style={{fontWeight:'bold', fontSize:17, color:'#1C1C1C', marginTop:15,
                marginBottom:20}}>Complete your profile</Text>
            <View style={{flexDirection:'row', marginBottom:16}}>
              <Image source={require('../../../assets/dummy/facebook-connect.png')}/>
              <View style={{marginLeft:16, flex:1}}>
                <Text style={{fontSize:15, color:'#4A4A4A', fontWeight:'bold'}}>Connect with Facebook</Text>
                <Text style={{fontSize:15, fontWeight:'normal', color:'#4A4A4A',
                  width:'80%'}}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical:11, paddingHorizontal:12,
              alignSelf:'flex-end', borderRadius:4}}>
              <Text style={{color:'white', fontWeight:'bold', fontSize:13, textAlign:'center'}}>CONNECT</Text>
            </TouchableOpacity>
            <View style={{paddingBottom:16, borderBottomColor:'#E8E9ED',
              borderBottomWidth:1, marginBottom:20, marginTop:16}}></View>
        </View>
    )
}

export default GoInfo;