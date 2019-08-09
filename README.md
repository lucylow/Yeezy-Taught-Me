# Yeezy Taught Me
Train a LSTM model to **generate random text** based on the patterns in a text corpus.

As Kanye West said:

> Lack of visual empathy,

> Equates the meaning of L-O-V-E.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=6mp72xUirfs
" target="_blank"><img src="http://img.youtube.com/vi/6mp72xUirfs/0.jpg" 
alt="Yeezy taught me well" width="240" height="180" border="10" /></a>

## Overview
The LSTM model operates at the **character level**. It takes a tensor of
shape `[numExamples, sampleLen, charSetSize]` as the input. 

The input is a **one-hot encoding** of sequences of `sampleLen` characters. The characters
belong to a set of `charSetSize` unique characters. With the input, the model
outputs a tensor of shape `[numExamples, charSetSize]`, which represents the
model's predicted **probabilites of the character** that follows the input sequence.

This process is repeated in order to generate a character sequence of a given length. 
The randomness (diversity) is controlled by a temperature parameter.


![Picture of program](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/YeezyTaughtMeWell.png)


Inspired by the LSTM text generation example from Keras:
https://github.com/keras-team/keras/blob/master/examples/lstm_text_generation.py

## Usage

The web demo supports model training and text generation. To launch the demo, do:

```sh
yarn && yarn watch
```
