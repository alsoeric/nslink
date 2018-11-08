#!/bin/python
import requests
import json


def main():
    url = "http://localhost:3000/api/rpc/module1"
    headers = {'content-type': 'application/json'}

    # Example echo method
    payload = {
        "method": "f2",
        "params": {
            "name": "mye nym"
            },
        "jsonrpc": "2.0",
        "id": 0,
    }
    response = requests.post(
        url, data=json.dumps(payload), headers=headers).json()

    print response
    assert response["jsonrpc"]
    assert response["id"] == 0
    if "this" in "this string":
        a=0
        b=[
            
        ]
if __name__ == "__main__":
    main()
