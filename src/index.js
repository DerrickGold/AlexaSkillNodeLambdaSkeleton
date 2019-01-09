"use strict";

const emptyResponse = {
    version: '1.0'
};

exports.handler = function(event, context, callback) {
    console.log('event:', JSON.stringify(event, undefined, 2));
    callback(null, emptyResponse);
};