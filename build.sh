#!/bin/bash

docker build --pull --rm \
-t borelanjo/clocklove:$1 \
-t borelanjo/clocklove:latest \
.