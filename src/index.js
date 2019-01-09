"use strict";

/**
 * Documentation here for Alexa Requests and Responses!
 * https://developer.amazon.com/docs/custom-skills/request-and-response-json-reference.html
 */

const emptyResponse = {
    version: '1.0'
};

exports.handler = function(event, context, callback) {
    console.log('event:', JSON.stringify(event, undefined, 2));
    callback(null, emptyResponse);
};