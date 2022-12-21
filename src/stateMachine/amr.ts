import { Machine, createMachine } from "xstate";



const AMR_STATES = {
    MOVE:'MOVE',
    IDLE:'IDLE'
}

const MSIION_EVENT = {
    CALL:"CALL"
}





export const amrMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMC2AnAdAWQPIDUBRAYgGNkAbCgbQAYBdRUABwHtYBLAFw9YDsmIAB6IATAFYAnJgDsAZgAscmeIA0IAJ6JlmcQF896tFgCSAEQAyJclTqMkINpx79BIhADZxsxcrWbEAEZxWkxaAA45KOiYuUCDIwxMAGVCADkzAH0TABVCbGSyShoGQSduXgEHd0CZBR8lFXUtBFEZeISQPlYIOEFjMvYK12rEAFo25vGQzuMcAkJB50q3MXDQ+Ub-FsC5fUMQOfMrJeGq0Hdw6U2-KYQFUV1ZpNSM7LyC05dz4TFAu7aHQMQA */
createMachine({
    id:'amr',
    initial:"IDLE",
    states:{
        MOVE:{
            on:{
                call:{
                    target:"IDLE",
                    actions:(ctx,e)=>{
                        console.log('hellow')
                    }
                }  
            },
        },
        IDLE:{
            on: {
                call: {
                  target:"SEND_ITEMS",
                  actions:(ctx,e)=>{
                    console.log(e)
                  }  
                },
            }
        },
        SEND_ITEMS:{
            on: {
                call: "MOVE"
            }
        }
    }
})