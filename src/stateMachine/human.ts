import { createMachine, assign } from "xstate";

export const humanMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAsCuBbAhgOwHQHUB5AJQGkBJAOQHEBiAUQDcxsAXAAgEYBtABgF1EoAA4B7WAEtWE0diEgAHok4A2ABy4VKgEwBmbdoCchtbwAs6tQBoQAT2W7DuCwd1rdnTgHYVXgKxqAL7BNtiiEHDyaFhySCBiktKy8koIALQqNvbpfrjGxmpqKmZuvrpmISDROAQkFDTyCVIysaCpZtq4vH4dfto6Zn6eXtpZDk6GOnruw74BldV4AMoAMvT0AApU1I3izclx7aN2iGqczl5qZiWcg-6chn4LGDUbKwCCAJrbu4ktKYhtO5cF5QeVdP4xghOI48lM3B5vHMgsFAkA */

  /** @xstate-layout N4IgpgJg5mDOIC5QAsCuBbAhgOwHQEkBlAQQBkB1YgaQFFdjDSaaAFAYgCcwAbMADwDaABgC6iUAAcA9rACWAF1lTs4kH0QBGDQDZcGgCxDtADm1CAzAFYNl7QCZLAGhABPROYDsx3Lbv6PHloaxjr6AL5hzmhYeERklLT0CXT4ACJMbADuUhwA1qmYLsJiSCDScorKquoIdnYauP4AnAbGpv762hrObgjalpa45nYhQpZNdv0anhFRGDgEJBTUdMTJBOk0WWBguWDYEMWq5QpKKqU1dQ3Nre0end2uiOO6xubGlnbv2h1dsyDRBZxZaJNYrXAsUjEACa+AAcgBxNhHUonSrnUCXJr6HwaJqfJrmfSTayeHqIfTGJqNYZ2DxCMYMynGCKREDYKQQOCqQEYsoyU5VC6IAC0E1wQmmDKEzJGGgc5IQIq0TX+vNwAFkAPJa1LHAXo6qaDxDOwWeVOJ5K8wNT5CN6WYweH4-Yz6cJs9Xa3X0REAJWh+oqZyNfUGw3NCqtA1w+LeIz89PpNrV8zw3tSuAAEsQWCxA6iDSHhWHTZHLb0tDj3R4WhZ7W8vKrPWnFvEVkHBXyaiL3RKpUy2nKo70zeZcGZ9Lcfvc-i2Ym2QatGMwWJ3DSWTHpDCYzFYbPYK4g7C0JW8bSehyEHKmF8D1gwmKxcCvWPCEevi5jjwYJ8YvkSVJNE0QhfPoiqeNSMrYgMPx0gydi3kCSwPskn5Ct+CDjk0pjAfiWiBE6R4IJSdixnSVL6OMdQfDoSGxCh4Jgok5Ban6VDvuh3buJYQi4H49S2DhAl4oq-SDCEvFulRHjmE0HiWPRi6oeCkIwpxhbBhhag8Q0J4mO6pHEqJ0byaaAygXJvjAUp95MesaRMFxobWLGuHAdYGiEQpiqWPSjRCPSjqBI6Y6smEQA */
  createMachine({
    id: "human",
    tsTypes: {} as import("./human.typegen").Typegen0,
    states: {
      MOOD: {
        states: {
          ANGRY: {},
          HAPPY: {},
        },

        initial: "ANGRY",
      },

      ISALWAKE: {
        states: {
          ASLEEP: {
            states: {
              SLEEPING: {},
            },

            on: {
              relex: ".SLEEPING",
            },
          },

          AWAKE: {
            states: {
              WORKING: {},
              PLAYING: {
                on: {
                  "": "#human.ISALWAKE.ASLEEP.SLEEPING",
                },
              },

              IDLE: {
                on: {
                  workDay: "WORKING",
                  weekend: "PLAYING",
                },
              },
            },
          },
        },
      },
    },

    initial: "ASLEEP",
    type: "parallel",
  });

export const toggleLightMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXAdASQDsBDAI2TAGIBtABgF1FQAHAe1lS1RYMZAA9EAVgCcAZhw0ALAEYAbMMGSaowdIDsggDQgAnoklqaOABzGATOcFmzk2WtmCAvo+1pMuQqXI5UsAPIEFLAA7hwAxhgAqgAKtAxIIKzsnNy8AghmgrI4quaiNpLGgqLGGtp6CNKCRgrGoqKSCmpqwpKiss6u6Nj4xGRgPv4AZkNBoVgRACJ+AOoAcnG8SRxcPAnpmdm5ZvmShcWlWrqINmoSZjR1srKlZtcazi4gBCwQcLxu2EtsK6nriABaGzlQE7HDCCEQ-LGYRmDQKTogT64Sa+Lxgb7JVZpIRqEEIQTGSQSOr1IlyNSiYTSRHI3rozG-NagDaSfGycQGamGOqSTKwmlPOmefqDAKMlLM-j6URGGTSWy2NREyz46TmHD5DnU6QK6RmYSXWndDx9by+PwjCXY-4INRmNWCQQ5GjKhXWRrq0SPRxAA */
  createMachine(
    {
      id: "light",
      initial: "Inable",
      context: { counter: 0 },
      tsTypes: {} as import("./human.typegen").Typegen1,
      states: {
        Disable: {
            
        },
        Inable: {
          initial: "isOn",
          states: {
            isOn: {
              on: {
                switchUP: {
                  target: "#light.Inable.isOff",
                  actions: "turn off the light",
                },
              },
            },

            isOff: {
              entry: "entry off",
              exit: "exit off",
              on: {
                switchDOWN: {
                  target: "#light.Inable.isOn",

                  actions: "lightOn",
                },
              },
            },
          },
          always: {
            target: "Disable",
            cond: "clickGuard",
          },
        },
      },
    },
    {
      actions: {
        lightOn: assign({
          counter: (context, event) => context.counter + 1,
        }),
      },
      guards: {
        clickGuard: (ctx, e) => {
          return ctx.counter > 2;
        },
      },
    }
  );
