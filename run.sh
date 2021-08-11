#!/bin/bash

cp -rf index.html reveal.js/index.html

cp -rf media/ reveal.js/media

cd reveal.js; npm install; npm start