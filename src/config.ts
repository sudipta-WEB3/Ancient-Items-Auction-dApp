import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "Ancient Items Auction dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1a93uw59kkqy89ncxwg3r5mws5pf8e6mvrwhgasqp97ay96ec4tkqdfxyrs",
            cw721: "andr14mvmc4tlnh9f6rkh3jqgz3caa3a56w832u82yurltmfya6hu0gusqst367",
            name: "Egypt Era Items",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
        }
    ],
};

export default CONFIG;
