#!/bin/bash

tar czf tylerbenton.tar.gz components next.config.js package.json pages sections public server.js
scp tylerbenton.tar.gz 167.172.206.120:~
rm tylerbenton.tar.gz

ssh -T 167.172.206.120 << 'ENDSSH'
rm -rf tylerbenton
mkdir tylerbenton
tar xf tylerbenton.tar.gz -C tylerbenton
rm tylerbenton.tar.gz

ENDSSH
