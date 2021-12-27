// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';


// export default function Blog  ()  {
//   const [data, setData] = useState([]);
//   // const [isLoading, setLoading] = useState(true);


//   let blogpost= async()=> {




//  await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@micheal')
    
//     .then(response => response.json())
//     .then(json => setData(json))
//     // console.log(json);
//   }



//   useEffect(() => {


//     blogpost();
//   }, []);




//   return (

//     <View style={{ flex: 1, padding: 60 }}>
//     <Text> {data.length}
//       </Text> 
//         {/* <FlatList
       
//           data={data}
//           keyExtractor={({id}, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.image}</Text>
//           )}
//         />   */}

//         {/* {data.map((well)=> <Text>

//           {well.title}
//         </Text>
//         )} */}


//     </View>
//   );
// };
















// // fetch('https://mywebsite.com/mydata.json', {
// //   method: 'POST',
// //   headers: {
// //     Accept: 'application/json',
// //     'Content-Type': 'application/json'
// //   },
// //   body: JSON.stringify({
// //     firstParam: 'yourValue',
// //     secondParam: 'yourOtherValue'
// //   })
// // });









// // import React, { useEffect, useState } from 'react';
// // import { ActivityIndicator, FlatList, Text, View } from 'react-native';



// // export default Blog = () => {
// //   const [isLoading, setLoading] = useState(true);
// //   const [data, setData] = useState([]);

// //   const getMoviesFromApi = () => {
// //     return fetch('https://reactnative.dev/movies.json')
// //       .then((response) => response.json())
// //       .then((json) => {
// //         return json.movies;
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //       });
// //   };

// //   useEffect(() => {
// //     getMoviesFromApi();
// //   }, []);

// //   return (
// //     <View style={{ flex: 1, padding: 24 }}>
// //       {isLoading ? <ActivityIndicator/> : (
// //         <FlatList
// //           data={data}
// //           keyExtractor={({ id }, index) => id}
// //           renderItem={({ item }) => (
// //             <Text>{item.title}, {item.releaseYear}</Text>
// //           )}
// //         />
// //       )}
// //     </View>
// //   );
// // };

















