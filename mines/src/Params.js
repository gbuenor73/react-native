import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    bordersize: 5,
    fontSize: 15,
    headerRatio: 0.15, // proporção do painel superior na tela
    difficultLevel: 0.10,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boarderHeight = totalHeight * (1 - params.headerRatio)
        return Math.floor(boarderHeight / this.blockSize)
    }
}

export default params;