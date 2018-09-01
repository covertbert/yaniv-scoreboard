/**
 * @flow
 * @relayHash 01cdb9eda2e321aaacac896f210f87b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MainViewContainer_QueryVariables = {||};
export type MainViewContainer_QueryResponse = {|
  +users: $ReadOnlyArray<?{|
    +name: string,
    +id: string,
  |}>
|};
export type MainViewContainer_Query = {|
  variables: MainViewContainer_QueryVariables,
  response: MainViewContainer_QueryResponse,
|};
*/


/*
query MainViewContainer_Query {
  users {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MainViewContainer_Query",
  "id": null,
  "text": "query MainViewContainer_Query {\n  users {\n    name\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MainViewContainer_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "MainViewContainer_Query",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ddfade92fcdf5adbf41a9d9e80dff9a0';
module.exports = node;
