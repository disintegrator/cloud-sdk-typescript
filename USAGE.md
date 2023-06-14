<!-- Start SDK Example Usage -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateAppResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();

sdk.appV1.createApp({
  appName: "minecraft",
  authConfiguration: {
    anonymous: {},
    google: {
      clientId: "corrupti",
    },
    nickname: {},
  },
}, {
  auth0: "",
}).then((res: CreateAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->