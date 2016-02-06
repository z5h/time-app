# What is this?

This is a fork of Evan Czaplicki's [StartApp](https://github.com/evancz/start-app) for Elm.

If you are here, you should first understand how [StartApp](https://github.com/evancz/start-app) works. Read up.

If you want to know why this exists, read [this](https://github.com/evancz/start-app/issues/24).

OK, now that you've read that and are an expert at StartApp, know that:  
StartApp has been renamed to TimeApp and StartApp.Simple has been renamed to TimeApp.Simple.

The important change is TimeApp.Simple's update has signature:

```elm
update : action -> Time -> model -> model
```

As opposed to StartApp.Simple's update signature of:

```elm
update : action -> model -> model
```

That simply means your **update function receives Time as an argument** so you know at what time update was called. This is nice because in a pure functional language you can't just "ask for the current time".

TimeApp has been similarly modified so as to have:

```elm
update : action -> Time -> model -> (model, Effects action)
```

as opposed to StartApp's:

```elm
update : action -> model -> (model, Effects action)
```

The final change is the addition of:  
```elm
StartTime.startTime
```
which returns the Time the app was started.

# Example


```elm

import Html exposing (div, button, text)
import Html.Events exposing (onClick)
import TimeApp.Simple as TimeApp
import StartTime


main =
  TimeApp.start { model = model, view = view, update = update }


model =
  { count = 0
  , prevEventTime = StartTime.startTime
  , eventTime = StartTime.startTime
  }


view address model =
  let
    secondsAgo = toString <| (model.eventTime - model.prevEventTime ) / 1000.0
  in
    div []
      [ button [ onClick address Decrement ] [ text "-" ]
      , div [] [ text <| (toString model.count) ++ ". Previously changed " ++ secondsAgo ++ " seconds ago" ]
      , button [ onClick address Increment ] [ text "+" ]
      , div [] [ ]
      ]


type Action = Increment | Decrement


update action time model =
  case action of
    Increment -> {count = model.count + 1, eventTime = time, prevEventTime = model.eventTime}
    Decrement -> {count = model.count - 1, eventTime = time, prevEventTime = model.eventTime}
```
