# Makefile for docs project

.PHONY: install build dev lint format clean

install:
	npm install

build:
	npm run build

dev:
	npm run dev

lint:
	npm run lint

format:
	npm run format

clean:
	rm -rf node_modules .next dist build
