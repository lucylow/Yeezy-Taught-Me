# Yeezy Taught Me Text Generation

<div>
  
  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Issues](https://img.shields.io/github/issues/lucylow/Yeezy-Taught-Me.svg)](https://github.com/lucylow/Yeezy-Taught-Me/issues)
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/lucylow/Yeezy-Taught-Me.svg)](https://github.com/lucylow/Yeezy-Taught-Me/pulls)
  [![License](https://img.shields.io/aur/license/android-studio.svg)]()

</div>

---
Web application for Machine Learning Training next character predictions using Long Short Term Memory Model (LSTM) and Time Series Prediction. Train Long Short Term Memory (LSTM) model to **generate random text** based on patterns in a given text corpus. As Kanye West said:
> Lack of visual empathy, equates the meaning of L-O-V-E.
---


## Table_of_Contents &#x1F49C;

* [Motivation](#Motivation-)
* [Yeezy Taught Me Application](#Yeezy Taught Me Application-)
* [Artifical Neural Network](#Artifical Neural Network-)
* [LSTM Model](#LSTM Model-)
* [Text Generation Model](#Text Generation Model-) 
* [Text Parameters](#Text Parameters-)
* [Usage](#Usage-)
* [Conclusion](#Conclusion-)
* [References](#references-) 

---

## Motivation

* LSTM commonly used in industry by companies ike Google, Apple, Microsoft, and Amazon: 
  * Time series prediction 
  * Speech recognition 
  * Music/rhythm learning 
  * Handwriting recognition 
  * Sign language translation 
  
* Bloomberg Business Week: **“LSTM is arguably the most commercial AI achievement, used for everything from predicting diseases to composing music."**

---

## Yeezy Taught Me Application

Web application for artifical intelligence model training and text generation:

![Picture of program](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/YeezyTaughtMeWell.png)

*Image. Screenshot of the web demo at https://lucylow.github.io/Yeezy-Taught-Me/*

---


## Artifical Neural Network
* Recurrent Neural Network [RNN]:
  * Used for classifying, processing, and **making predictions based on time-series** with time, sequence, or anything with a temporal dimension.
  * The decision a recurrent net reached at **time step t - 1** affects the decision it will reach one moment later at **time step t**.
  
* Long Short Term Memory [LSTM]:
  * LSTM + Vanilla RNN solve the **vanishing gradient problem** since  units allow gradient flows to be unchanged
  * Neural network operates on different scales of time at once and information can be stored in, written to, or read from a cell.
  * Gates are analog with **element-wise multiplication by sigmoids**, which are all in the **range of 0-1**. Refer to diagram under " LSTM Model".

![RNN and LSTM models](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/RNN%20vs%20LSTM.png)

*Image. Explanations of how the RNN and LSTM models work.*


---


## LSTM Model

LSTM Unit Map:
* Cell (value over time interval)
* Input gate
* Output gate
* Forget gate 

![LSTM cells from https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/recurrent_neural_networks.html
](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/LSTM%20cell%20and%20gates.png)

*Image. LSTM cells where information can be stored in, written to, or read.*


---


## Text Generation Model

The LSTM model operates at the **character level**. It takes a tensor of shape `[numExamples, sampleLen, charSetSize]` as the input. The input text data is from "./data" file.

The input is a one-hot encoding of sequences of `sampleLen` characters. The characters belong to a set of `charSetSize` unique characters. With the input, the model outputs a tensor of shape `[numExamples, charSetSize]`, which represents the model's predicted **probabilites of the character that follows the input sequence**.

This process is repeated in order to **generate a character sequence** of a given length hence the "text generation" part of the project. The randomness (diversity) is controlled by a temperature parameter.


---


## Text Parameters

* 'Name of the text dataset’ for input file
* Path to the trained next-char prediction model saved on disk 
* Length of the text to generate 
* Temperature value to use of text generation. Higher values for more random-looking results 
* CUDA GPU for training 
* Step length for how many characters to skip between one example to next 


---


## Usage

The web demo supports model training and text generation. To launch the demo, do:

```sh
yarn && yarn watch
```


---

## References 
* Kera. LSTM Text Generation Example. https://github.com/keras-team/keras/blob/master/examples/lstm_text_generation.py
* Mozilla's IndexDB. JavaScript-based object-oriented database documentation. https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
* Andrej Karpathy. "The Unreasonable Effectiveness of Recurrent Neural Networks" http://karpathy.github.io/2015/05/21/rnn-effectiveness/
* Sepp Hochreiter; Jürgen Schmidhuber "Long short-term memory". Neural Computation. doi:10.1162/neco.1997.9.8.1735. 

