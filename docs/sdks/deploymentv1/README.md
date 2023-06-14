# deploymentV1

## Overview

Operations that allow you configure and manage an application's [build](https://hathora.dev/docs/concepts/hathora-entities#build) at runtime.

### Available Operations

* [createDeployment](#createdeployment) - Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) and [build](https://hathora.dev/docs/concepts/hathora-entities#build).
* [getDeploymentInfo](#getdeploymentinfo) - Get details for an existing [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId`.
* [getDeployments](#getdeployments) - Returns an array of [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

## createDeployment

Create a new [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) and [build](https://hathora.dev/docs/concepts/hathora-entities#build).

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateDeploymentResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { DeploymentTransportType, PlanName, TransportType } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.deploymentV1.createDeployment({
  auth0: "",
}, {
  additionalContainerPorts: [
    {
      name: "default",
      port: 8000,
      transportType: TransportType.Udp,
    },
    {
      name: "default",
      port: 8000,
      transportType: TransportType.Udp,
    },
  ],
  containerPort: 4000,
  env: [
    {
      name: "EULA",
      value: "TRUE",
    },
    {
      name: "EULA",
      value: "TRUE",
    },
  ],
  planName: PlanName.Tiny,
  roomsPerProcess: 3,
  transportType: TransportType.Udp,
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", 1).then((res: CreateDeploymentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `security`                                                                                 | [operations.CreateDeploymentSecurity](../../models/operations/createdeploymentsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |                                                                                            |
| `deploymentConfig`                                                                         | [shared.DeploymentConfig](../../models/shared/deploymentconfig.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `appId`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                   |
| `buildId`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        | 1                                                                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |                                                                                            |


### Response

**Promise<[operations.CreateDeploymentResponse](../../models/operations/createdeploymentresponse.md)>**


## getDeploymentInfo

Get details for an existing [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetDeploymentInfoResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { DeploymentTransportType, PlanName, TransportType } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.deploymentV1.getDeploymentInfo({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2", 1).then((res: GetDeploymentInfoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `security`                                                                                   | [operations.GetDeploymentInfoSecurity](../../models/operations/getdeploymentinfosecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |                                                                                              |
| `appId`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | app-af469a92-5b45-4565-b3c4-b79878de67d2                                                     |
| `deploymentId`                                                                               | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          | 1                                                                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |                                                                                              |


### Response

**Promise<[operations.GetDeploymentInfoResponse](../../models/operations/getdeploymentinforesponse.md)>**


## getDeployments

Returns an array of [deployment](https://hathora.dev/docs/concepts/hathora-entities#deployment) objects for an existing [application](https://hathora.dev/docs/concepts/hathora-entities#application) using `appId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetDeploymentsResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { DeploymentTransportType, PlanName, TransportType } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.deploymentV1.getDeployments({
  auth0: "",
}, "app-af469a92-5b45-4565-b3c4-b79878de67d2").then((res: GetDeploymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `security`                                                                             | [operations.GetDeploymentsSecurity](../../models/operations/getdeploymentssecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |                                                                                        |
| `appId`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | app-af469a92-5b45-4565-b3c4-b79878de67d2                                               |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |                                                                                        |


### Response

**Promise<[operations.GetDeploymentsResponse](../../models/operations/getdeploymentsresponse.md)>**

