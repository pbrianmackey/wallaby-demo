#!/bin/bash
for i in {1..2}
do
   # echo "Welcome $i times"
   ng generate component simple-component$i
done