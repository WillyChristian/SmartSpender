#!/bin/bash

fileName="temp_file.txt"
path="./scripts/$fileName"

function findTempFile() {
    echo "$(find ./scripts -type f -name "$fileName")"
}

function populateWithDuplicatedFiles() {
    echo "$(find . -type f -name "._*")" > "$path"
}

function deleteDuplicatedFiles() {
    exec 3< "$1"
    while IFS= read -r line <&3
    do
        echo "Removendo $line"
        rm -fr "$line"
    done
    exec 3<&-
}


if [ ! -f "$path" ]; then
    touch "$path"
fi

if [ ! -s "$path" ]; then
    populateWithDuplicatedFiles
fi

deleteDuplicatedFiles "$path"

rm "$path"