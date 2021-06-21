/*
   ADT

   Abstract Data Type


   Either<Left, Right> - Computation that can fail

   IO<A> - Lazy Sync computation that can not fail

   IOEither<Left, Right> = Lazy Sync computation that can fail

 */

import * as E from 'fp-ts/Either'
import * as IO from 'fp-ts/IO'
import fs from 'fs'
import {pipe} from "fp-ts/function";

function JsonParse(a: string): E.Either<Error, Record<string, unknown>>{
    try {
      const res = JSON.parse(a) as Record<string, unknown>
        return E.right(res)
    } catch (e){
        return E.left(E.toError(e))
    }
}


function ConsoleLog(a: unknown): IO.IO<void>{
    return () => console.log(a)
}


const s = ConsoleLog('hello world')
console.log('hello world')




function add5(a: number){
    return a + 5
}


function toString(a: number){
    return a + ''
}

// Referential transparency

//

function program(a: unknown){
    if(typeof a === 'number'){
        const res = add5(10)
        const res2 = toString(res)
        return res2
    } else {
        return new Error(`invalid input`)
    }
}

const program2 = (a: string) => pipe(a, JsonParse, E.map(x => [x]))


















/*
   Create a simple hello world program

 */