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
        <Timer totalDuration={this.state.totalDuration} msecs start={this.state.timerStart}
          reset={this.state.timerReset}
          options={options}
          handleFinish={handleTimerComplete}
          getTime={this.getFormattedTime} 
        />
        <View style={styles.buttons}>
            <View>
                <TouchableHighlight onPress={this.toggleTimer}>
                    <Text style={{fontSize: 30}}>{!this.state.timerStart ? "Start" : "Stop"}</Text>
                </TouchableHighlight>
            </View>
            <View>
                <TouchableHighlight onPress={this.resetTimer}>
                    <Text style={{fontSize: 30}}>Reset</Text>
                </TouchableHighlight>
            </View>
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