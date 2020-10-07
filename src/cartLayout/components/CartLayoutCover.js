import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colores, tipoDeLetra} from '../../constantes/Temas';

const CartLayoutCover = ({uri}) => {
  return (
    <View style={style.cartLayoutCoverMainContainer}>
      <View style={style.cartLayoutCoverContainerBg}>
        <View style={style.cartLayoutConverContainer}>
          <Image
            source={{uri: `data:image/gif;base64,${uri}`}}
            style={style.cartLayoutImage}
            resizeMode="cover"
          />
        </View>
      </View>
      <Text style={style.cartLayoutCovertText}>Portada</Text>
    </View>
  );
};

const style = StyleSheet.create({
  cartLayoutCoverMainContainer: {
    alignItems: 'center',
  },
  cartLayoutCoverContainerBg: {
    position: 'relative',
    height: 150,
    width: 226,
    borderWidth: 1,
    borderColor: colores.grisFormatoAlbum,
    backgroundColor: colores.blanco,
    elevation: 1,
  },
  cartLayoutConverContainer: {
    position: 'absolute',
    bottom: 3,
    height: 150,
    width: 220,
    borderWidth: 1,
    borderColor: colores.grisFormatoAlbum,
  },
  cartLayoutImage: {
    height: '100%',
    width: '100%',
  },
  cartLayoutCovertText: {
    marginTop: 5,
    marginBottom: 30,
    color: colores.gris,
    fontWeight: '700',
    fontFamily: tipoDeLetra.bold,
    fontSize: 16,
  },
});
export default CartLayoutCover;
