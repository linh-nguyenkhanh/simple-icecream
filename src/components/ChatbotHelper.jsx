import React from 'react';
import ChatBot from 'react-simple-chatbot'
import {ThemeProvider} from "styled-components"

export default function ChatbotHelper(){

const headerTitle = "Customer Support";

  const steps = [{
    id: "1",
    message: "Welcome to our IceCream shop!",
    trigger: "2"
  },
  // user enter their input
  {
    id: "2",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    message: 'What is your name?',
    trigger: "4"
  },
  {
    id: "4",
    user: true,
    trigger: "5"
  },
  {
    id: "5",
    message: 'Hi {previousValue}, nice to meet you!',
    end:true
  },]

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Poppins',
  headerBgColor: 'rgba(0, 168, 255, 0.56)',
  headerFontColor: '#fff',
  headerFontSize: '25px',
  botBubbleColor: 'rgba(0, 168, 255, 0.90)',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

  return(
    <ThemeProvider theme={theme}>
    <ChatBot steps = {steps}
  floating={true}
  botDelay={1000}
  headerTitle={headerTitle}
  enableSmoothScroll={true}
  />
  </ThemeProvider> 
  )
}  