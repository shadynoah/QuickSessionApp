import { Stack, useRouter } from "expo-router";
import React, {useEffect} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { changeLanguage, i18n } from './i18n/i18n';

const Welcome = () => {

  const router = useRouter();
//   useEffect(() => {
//     alert("change")
//   }, [i18n.locale])
  
  const handleOnPress = () => {
    router.push("HomeScreen");
    // alert(i18n.locale)
  };
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
   const onChange = ()=>{
    if(i18n.locale === 'en')
    {
        changeLanguage('ar');

    }
     else 
     changeLanguage('en');
     forceUpdate();
   }
  return (
    <View style={{ flex: 1, justifyContent:'center',marginHorizontal:30 }}>
        <Stack.Screen     options={{
          headerTitle: 'welcome',
        }}  />
       <Button  title="switch language" onPress={onChange} />
      
       <Text style={{marginVertical:30}}>{i18n.t('welcome.buttons.login')}</Text>

      <Button onPress={handleOnPress} title={i18n.t('welcome.buttons.login')}></Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  txtStyle: {
    marginBottom: 20,
  },
});
