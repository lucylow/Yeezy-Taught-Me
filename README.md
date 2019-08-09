# Yeezy Taught Me
Train LSTM model to **generate random text** based on patterns in a given text corpus.

As Kanye West said:

> Lack of visual empathy, equates the meaning of L-O-V-E.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=6mp72xUirfs
" target="_blank"><img src="http://img.youtube.com/vi/6mp72xUirfs/0.jpg" 
alt="Yeezy taught me well" width="240" height="180" border="10" /></a>

---
## Deep Learning // Artifical Neural Networks
* Recurrent Neural Network [RNN] 
  * Used for classifying, processing, and making predictions based on time-series with time, sequence, or anything with a temporal dimension
  * The decision a recurrent net reached at **time step t-1** affects the decision it will reach one moment later at **time step t**
  
* Long Short Term Memory [LSTM]
  * LSTM + vanilla RNN solve the vanishing gradient problem since LSTM units allow gradient flows to be unchanged
  * LSTM allow neural network to operate on different scales of time at once 
  * Information can be stored in, written to, or read from a cell, much like data in a computer’s memory.
  * Gates are analog with element-wise multiplication by sigmoids, which are all in the range of 0-1.

![RNN and LSTM models](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/RNN%20vs%20LSTM.png)



## Technical LSTM Model

LSTM Unit Map
* cell (value over time interval)
* input gate
* output gate
* forget gate 

![LSTM cells from https://leonardoaraujosantos.gitbooks.io/artificial-inteligence/content/recurrent_neural_networks.html
](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/LSTM%20cell%20and%20gates.png)


## Technical Text Generation 

The LSTM model operates at the **character level**. It takes a tensor of
shape `[numExamples, sampleLen, charSetSize]` as the input. The input text data is from "./data" file.

The input is a **one-hot encoding** of sequences of `sampleLen` characters. The characters
belong to a set of `charSetSize` unique characters. 
With the input, the model outputs a tensor of shape `[numExamples, charSetSize]`, which represents the model's predicted **probabilites of the character** that follows the input sequence.

This process is repeated in order to **generate a character sequence of a given length**. 
The randomness (diversity) is controlled by a temperature parameter.


## Technical Yeezy Taught Me 

Requires
* 'Name of the text dataset’
* Path to the trained next-char prediction model saved on disk 
* Length of the text to generate 
* Temperature value to use of text generation. DISPLAY_TEMPERATURES = [0, 0.25, 0.5, 0.75] Higher values == More random-looking generation results 
* GPU - CUDA GPU for training 
* Step length - how many characters to skip between one example to next 

![Picture of program](https://github.com/lucylow/Yeezy-Taught-Me/blob/master/YeezyTaughtMeWell.png)

---

## Usage

The web demo supports model training and text generation. To launch the demo, do:

```sh
yarn && yarn watch
```
---


## LSTMs Application in Real World
* LSTM commonly used in industry by Google, Apple, Microsoft and Amazon 
  * time series prediction 
  * speech recognition 
  * music/rhythm learning 
  * handwriting recognition 
  * sign language translation 
* Bloomberg Business Week: “LSTM is arguably the most commercial AI achievement, used for everything from predicting diseases to composing music."

## Refernces 
* Kera. LSTM Text Generation Example. https://github.com/keras-team/keras/blob/master/examples/lstm_text_generation.py
* Andrej Karpathy. "The Unreasonable Effectiveness of Recurrent Neural Networks" http://karpathy.github.io/2015/05/21/rnn-effectiveness/
* Sepp Hochreiter; Jürgen Schmidhuber "Long short-term memory". Neural Computation. doi:10.1162/neco.1997.9.8.1735. 

