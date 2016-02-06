module StartTime (startTime) where
{-| This module is for retriving the Time when the application started.

@docs startTime
-}

import Time exposing (Time)
import Native.StartTime exposing (startTime)

{-| The time at which the application was started.
-}
startTime : Time
startTime = Native.StartTime.startTime
