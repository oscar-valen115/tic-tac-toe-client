#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/id" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{}'

echo
