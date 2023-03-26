#!/bin/sh
UUID=${UUID:-'44502d3b-d7c5-4c02-92f8-e43449da1482'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
