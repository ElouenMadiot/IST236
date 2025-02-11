import { Text, TextInput, View } from "react-native";
import Button from '@/components/Button';
import { useState } from "react";

export default function Index() {

  const [ showAppInfo, setShowAppInfo] = useState<Boolean>(false)

  const [ enterText, setText] = useState(' ');
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
      var finalText = ""
      if (enterText === "") {
      finalText = "No question was pondered"
  } else {
      const randomIndex = Math.floor(Math.random() * responses.length);
      finalText = responses[randomIndex]
    }
  
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        {showAppInfo ? (
            <View>
              <Text> Your Question: {enterText}</Text>
              <Text>The Almightys answer: {finalText}</Text>
            </View>
        ) :(
          <View>
            <TextInput
              value = {enterText}
              onChangeText = {setText}
              placeholder = 'Enter Thy Question Here'
              />
            <Button label="Ask the Almighty 8ball " onPress={() => setShowAppInfo(true)}/>  
          </View>
        )
      }
    </View>
  );
}
