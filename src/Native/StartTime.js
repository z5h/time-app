var startTime = (new Date()).getTime();

var make = function make(elm) {
    elm.Native = elm.Native || {};
    elm.Native.StartTime = elm.Native.StartTime || {};

    if (elm.Native.StartTime.values) return elm.Native.StartTime.values;

    return elm.Native.StartTime.values = {
        'startTime': startTime
    };
};

Elm.Native.StartTime = {};
Elm.Native.StartTime.make = make;
