from flask import Flask, request
from flask_cors import CORS, cross_origin

import json
import io
from PIL import Image
import cv2
import base64
import numpy as np

import os
import string
import random
import argparse
import numpy as np
from PIL import ImageFilter, Image
from pickle import dump, load
from datetime import date, datetime
import matplotlib.pyplot as plt

from keras.models import Model, load_model
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.preprocessing.image import load_img, img_to_array
from keras.applications.xception import Xception, preprocess_input


# ap = argparse.ArgumentParser()
# ap.add_argument('-i', '--image', required=True, help="Image Path")
# args = vars(ap.parse_args())
# img_path = args['image']

def extract_features(image, model):
    image = image.resize((299,299))
    image = np.array(image)
    # for images that has 4 channels, we convert them into 3 channels
    if image.shape[2] == 4: 
        image = image[..., :3]
    image = np.expand_dims(image, axis=0)
    image = image/127.5
    image = image - 1.0
    feature = model.predict(image)
    return feature

def word_for_id(integer, tokenizer):
    for word, index in tokenizer.word_index.items():
        if index == integer:
            return word
    return None

def generate_desc(model, tokenizer, photo, max_length):
    in_text = 'start'
    for i in range(max_length):
        sequence = tokenizer.texts_to_sequences([in_text])[0]
        sequence = pad_sequences([sequence], maxlen=max_length)
        pred = model.predict([photo,sequence], verbose=0)
        pred = np.argmax(pred)
        word = word_for_id(pred, tokenizer)
        if word is None:
            break
        in_text += ' ' + word
        if word == 'end':
            break
    return in_text

tokenizer = load(open("./python/tokenizer.p","rb"))
model = load_model('./python/models/model_92020-10-28.h5')
xception_model = Xception(include_top=False, pooling="avg")


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/post/', methods=['POST'])
def gen_desc():
    data = request.data
    imgdata = base64.b64decode(data[22:])
    image = Image.open(io.BytesIO(imgdata))
    # print(np.array(image))

    max_length = 32

    photo = extract_features(image, xception_model)

    description = generate_desc(model, tokenizer, photo, max_length)
    desc = ' '.join(description.split()[1:-1])
    print(desc)
    # plt.imshow(image)
    # image.save('my.png')
    # return json.dumps("Hello World!")
    return json.dumps(desc)

@app.route("/")
def home_view():
    return "<h1>Caption Generator Endpoint</h1>"

if __name__ == '__main__':
    app.run()
