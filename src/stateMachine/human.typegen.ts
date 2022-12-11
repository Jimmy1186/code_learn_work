
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          
        };
        matchesStates: "ISALWAKE" | "ISALWAKE.ASLEEP" | "ISALWAKE.ASLEEP.SLEEPING" | "ISALWAKE.AWAKE" | "ISALWAKE.AWAKE.IDLE" | "ISALWAKE.AWAKE.PLAYING" | "ISALWAKE.AWAKE.WORKING" | "MOOD" | "MOOD.ANGRY" | "MOOD.HAPPY" | { "ISALWAKE"?: "ASLEEP" | "AWAKE" | { "ASLEEP"?: "SLEEPING";
"AWAKE"?: "IDLE" | "PLAYING" | "WORKING"; };
"MOOD"?: "ANGRY" | "HAPPY"; };
        tags: never;
      }

export interface Typegen1 {
        '@@xstate/typegen': true;
        internalEvents: {
          "": { type: "" };
"xstate.init": { type: "xstate.init" };
"xstate.stop": { type: "xstate.stop" };
        };
        invokeSrcNameMap: {
          
        };
        missingImplementations: {
          actions: "entry off" | "exit off" | "turn off the light";
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {
          "entry off": "switchUP";
"exit off": "" | "switchDOWN" | "xstate.stop";
"lightOn": "switchDOWN";
"turn off the light": "switchUP";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          "clickGuard": "";
        };
        eventsCausingServices: {
          
        };
        matchesStates: "Disable" | "Inable" | "Inable.isOff" | "Inable.isOn" | { "Inable"?: "isOff" | "isOn"; };
        tags: never;
      }
  