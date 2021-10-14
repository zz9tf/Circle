import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

const MathQuiz = ({n}) => {

  const [rand1, setRand1] = useState(Math.floor(Math.random() * n) + 1);
  const [rand2, setRand2] = useState(Math.floor(Math.random() * n) + 1);
  const [rightAnswer, setRightAnswer] = useState(rand1*rand2);
  const [answer, setAnswer] = useState();
  const [isCheck, setIsCheck] = useState(true);

  const [correctTime, setCorrectTime] = useState(0);
  const [answerTime, setAnswerTime] = useState(0);
  const [percentCorrect, setPrecentCorrect] = useState(0);

// for checkAnswer
  const [reply, setReply] = useState();
  const [marginLeft, setMarginLeft] = useState(0);

  const [isShow, setIsShow] = useState(true);

  const [result, setResult] = useState("waiting");

  const AnswerComponents = ({isCheck, isRight}) => {

    const checkAnswer = (isRight) => {
      var ct = correctTime
      var at = answerTime+1
      setIsCheck(false)
      if (isRight) {
        setReply("Correct!!")
        setMarginLeft(0)
        ct = ct + 1
        setResult("correct")
      } else {
        setReply("Sorry, answer was "+ rightAnswer.toString() + ", try again!")
        setMarginLeft(150)
        setResult("incorrect")
      }

      setCorrectTime(ct)
      setAnswerTime(at)
      setPrecentCorrect(ct/at)
    }

    const nextQuestion = () => {
        var r1 = Math.floor(Math.random() * n) + 1
        var r2 = Math.floor(Math.random() * n) + 1

        setRand1(r1)
        setRand2(r2)
        setRightAnswer(r1*r2)
        setAnswer("")
        setIsCheck(true)
        setResult("waiting")
    }

    if(isCheck){
      return (
        <View style={{alignItems: 'flex-start', margin: 10}}>
          <Button
            title="CHECK ANSWER"
            color="red"
            onPress = {() => checkAnswer(isRight)}
          />
        </View>
      )
    } else {
      return (
        <View>
          <View>
            <Text style={{color: 'red', fontSize: 40}}>
              {reply}
            </Text>
          </View>
          <View style={{alignItems: 'flex-start', margin: 10, marginLeft: marginLeft}}>
            <Button
              title="NEXT QUESTION"
              color="green"
              onPress={() => nextQuestion()}
            />
          </View>
        </View>
      )
    }
  }

  const DebugView = ({isShow}) => {
    if (isShow){
      return (
        <View style={{alignItems: "flex-start"}} >
          <Button
            style={{paddingVertical: 32}}
            title="HIDE DEDUG INFO"
            color="green"
            onPress={() => setIsShow(false)}
          />
          <View>
            <Text style={{marginLeft:5}}>
               x: {rand1}
            </Text>
            <Text style={{marginLeft:5}}>
               y: {rand2}
            </Text>
            <Text>
               answer: {rightAnswer}
            </Text>
            <Text style={{marginLeft:5}}>
               correct: {correctTime}
            </Text>
            <Text style={{marginLeft:5}}>
               answered: {answerTime}
            </Text>
            <Text style={{marginLeft:5}}>
               result: {result}
            </Text>
          </View>
        </View>
      )
    } else {
      return(
        <View style={{alignItems: "flex-start"}}>
          <Button
            style={{paddingVertical: 32}}
            title="SHOW DEDUG INFO"
            color="green"
            onPress={() => setIsShow(true)}
          />
        </View>
    )
    }
  }
  return (
    <View style={{flexDirection: "column"}}>
      <Text style={{color: "blue", fontSize: 50}}>
      Math Quiz for numbers between 0 and 12
      </Text>
      <Text style={{color: "black", fontSize: 34}}>
      Calculate the product of the following two numbers:
      </Text>
      <Text style={{color: "black", fontSize: 50, marginLeft: 25, alignItems: 'center'}}>
       {rand1} * {rand2} =
      <TextInput
        style={{color: "black", fontSize: 50, width: 540}}
        placeholder="???"
        onChangeText={text => {setAnswer(text)}}
        clearButtonMode='always'
        value={answer}
      />
      </Text>

      <AnswerComponents
        isCheck={isCheck}
        isRight={answer == rightAnswer}
      />
      <Text>
        Correct: {correctTime}
      </Text>
      <Text>
        Answered: {answerTime}
      </Text>
      <Text>
        Precent Correct: {percentCorrect}
      </Text>
      <DebugView isShow={isShow} />
    </View>
  )
}
export default MathQuiz;
