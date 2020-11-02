import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 
class TimerComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      stopwatchStart: false,
      totalDuration: 1000,
      timerReset: false,
      stopwatchReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }
 
  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }
 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }
  
//   getFormattedTime(time) {
//       this.currentTime = time;
//   };
 
  render() {
    return (
      <View style={styles.container}>
        <Stopwatch laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
        //   getTime={this.getFormattedTime} 
          />
        <View style={styles.buttons}>
            <TouchableHighlight onPress={this.toggleStopwatch}>
            <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.resetStopwatch}>
            <Text style={{fontSize: 30}}>Reset</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },  
    buttons: {
        flexDirection: 'row',
        padding: 10
    }
})

export default TimerComp;