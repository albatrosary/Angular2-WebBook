# !/bin/sh
rm -rf dist
mkdir dist
cp -r ./src/ ./dist/

mkdir -p ./dist/node_modules/
cp -r ./node_modules/ ./dist/node_modules/

