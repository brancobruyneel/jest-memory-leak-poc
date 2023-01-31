#!/bin/bash

for i in {01..200}; do cp test/example.test.ts "test/leak$i.test.ts"; done
