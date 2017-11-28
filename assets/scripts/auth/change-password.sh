#!/bin/bash
ID="4"
TOKEN="BAhJIiVkM2ZjYjA0ZmE5YWY0M2NkMDU4ZmJmZTBkYmFjM2M5NgY6BkVG--a1c1c2d354e409b48f56e613940303a547619a7c"
OLD="test"
NEW="test2"

curl --include --request PATCH http://localhost:4741/change-password/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'
