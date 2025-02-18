import { FlatList, StatusBar, Text, TextInput, View,} from "react-native";
import Button from '@/components/Button';
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageSourcePropType } from "react-native";

interface OurItem {
  id: string;
  name: string;
  image: string;
  rating: string;
}


const movieItem: OurItem[] = [
  {
    id: '1',
    name: 'Sinbad And the legends of the seven seas',
    image: require('@/assets/images/movie1.jpg'),
    rating: '10',
  },
  {
    id: '2',
    name: 'Guardian of the galaxy',
    image: require('@/assets/images/movie2.jpg'),
    rating: '8',
  },
  {
    id: '3',
    name: 'Guardian of the galaxy vol 2',
    image: require('@/assets/images/movie3.jpg'),
    rating: '10',
  },
  {
    id: '4',
    name: 'Guardian of the galaxy vol 3',
    image: require('@/assets/images/movie4.jpg'),
    rating: '9',
  },
  {
    id: '5',
    name: 'Deadpool And Wolverene',
    image: require('@/assets/images/movie5.jpg'),
    rating: '10',
  },
  {
    id: '6',
    name: 'Shawshank Redemption',
    image: require('@/assets/images/movie6.jpg'),
    rating: '10',
  },
  {
    id: '7',
    name: 'Treasure Planet',
    image: require('@/assets/images/movie7.jpg'),
    rating: '9',
  },
  {
    id: '8',
    name: 'Atlantis: The Lost Empire',
    image: require('@/assets/images/movie8.jpg'),
    rating: '10',
  },
  {
    id: '9',
    name: 'MoonKnight',
    image: require('@/assets/images/movie9.jpg'),
    rating: '9',
  },
  {
    id: '10',
    name: 'Doctor Strange',
    image: require('@/assets/images/movie10.jpg'),
    rating: '8',
  },
];

const ItemCompenent = ({ item } : {item: OurItem}) => (
  <View>
    <Text>{item.name}</Text>
    <Image 
    style = {{height: 100, width: 200}}
    source = {item.image as ImageSourcePropType} />
    <Text>{item.rating}</Text>
  </View>
);

export default function Index() {

  
 
  
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <StatusBar/>  
      <SafeAreaView>
        <View>
          <Text>My Top Ten Movies</Text>
        </View>
        <View>
        <FlatList
          data={movieItem}
          renderItem ={({item}) => 
            <ItemCompenent item = {item} />
        }
          
        />
        </View>
        
      </SafeAreaView>  
    </View>
  );
}
