import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Home = ({navigation}) => {

    // const [usuarios, setUsuarios] = useState([])

    // useEffect(() => {

    //     Api.get('/coloque aqui o endpoint')
    //         .then(response => {
    //             setUsuarios(response.data.users)
    //         })
    //         .catch(error => {
    //             console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error)
    //         })

    // }, [])


    function navegarParaOutraTela() {
        navigation.navigate('Tela2')
    }
    
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={navegarParaOutraTela}>
        Ir para outra página
      </Button>
    </View>
  )
}

export default Home