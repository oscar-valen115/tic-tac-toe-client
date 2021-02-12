#!/bin/bash

curl "https://library-express-api.herokuapp.com/change-password" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \


echo
