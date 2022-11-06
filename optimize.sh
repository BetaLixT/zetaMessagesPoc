#!/bin/bash
shopt -s nullglob
for FILE in *.jpg *.JPG *.jpeg *.png; do
    echo $FILE
    imageWidth=$(identify -format "%w" $FILE)
    imageHeight=$(identify -format "%h" $FILE)

    if [ $imageWidth -gt 1920 ] || [ $imageHeight -gt 1080 ] ; then
        convert $FILE -strip -resize 1920x1080 -quality 60 ../optimized/${FILE%.*}.jpg
    else
        convert $FILE -strip -quality 60 ../optimized/${FILE%.*}.jpg
    fi
done
