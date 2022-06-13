import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import { CircleButton, RectButton } from './Button'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTcard = ({data}) => {
    const navigation = useNavigation()
  return (
    <View style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{ width: "100%", height: 250 }}>
            <Image
                source={data.image}
                resize='cover'
                style={{
                    width:"100%",
                    height: "100%",
                    borderTopLeftRadius: SIZES.font,
                    borderTopRightRadius: SIZES.font,
                }}

            />
            <CircleButton imgUrl={assets.heart} right={10} top={10}/>
        </View>

        <SubInfo />
    </View>
  )
}

export default NFTcard