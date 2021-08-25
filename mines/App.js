import React, { Component } from 'react';
import {
  Alert,
  SafeAreaView as View,
  StyleSheet
} from 'react-native';
import Header from './src/components/Header';
import MineField from './src/components/MineField';
import { cloneBoard, createMinedBoard, flagsUsed, hadExplosion, invertFlag, openField, showMines, wonGame } from './src/functions';
import params from './src/Params';
import LevelSelection from './src/screens.js/LevelSelection';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }

  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perder!', 'Test')
    }

    if (won) {
      Alert.alert('Parabens', 'Voce venceu!')
    }

    this.setState({ board, lost, won })

  }

  onSelect = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens', 'Voce ganhou')
    }

    this.setState({ board, won })

  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />

        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })} />

        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelect={this.onSelect} />
        </View>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});

