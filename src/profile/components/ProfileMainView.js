import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {tipoDeLetra, colores} from '../../constantes/Temas';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProfileMainView = ({name, address, photo, age}) => {
  return (
    <LinearGradient
      colors={['#ffaa66', '#ff7584']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{
        alignItems: 'center',
        width: '100%',
        height: '35%',
        justifyContent: 'center',
      }}>
      <Image
        source={{uri: photo}}
        style={{
          height: 120,
          width: 120,
          borderRadius: 100,
          borderColor: colores.blanco,
          borderWidth: 2.5,
        }}
      />
      <Text
        style={{
          justifyContent: 'center',
          color: colores.blanco,
          fontSize: RFPercentage(2.5),
          fontFamily: tipoDeLetra.bold,
          margin: 10,
          fontWeight: 'bold',
        }}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
        }}>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon name="calendar" size={18} color={colores.blanco} />
          <Text
            style={{
              marginLeft: 10,
              color: colores.blanco,
              fontFamily: tipoDeLetra.bold,
            }}>
            Edad: {age} Años
          </Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Icon name="location-arrow" size={18} color={colores.blanco} />
          <Text
            style={{
              marginLeft: 10,
              color: colores.blanco,
              fontFamily: tipoDeLetra.bold,
            }}>
            {address}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>EDITAR PERFIL</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 35,
    borderRadius: 30,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: colores.blanco,
  },

  buttonTitle: {
    color: '#f18263',
    fontWeight: 'bold',
    fontFamily: tipoDeLetra.bold,
    fontSize: RFPercentage(1.5),
  },
});

ProfileMainView.defaultProps = {
  name: 'gaston',
  address: 'Iquique, Chile',
  photo:
    'https://viajes.nationalgeographic.com.es/medio/2013/09/02/hemis_0314966_1000x766.jpg',
  age: '20',
};
