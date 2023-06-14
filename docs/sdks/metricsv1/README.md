# metricsV1

## Overview

Operations to get metrics by [process](https://hathora.dev/docs/concepts/hathora-entities#process). We store 72 hours of metrics data.

### Available Operations

* [getMetrics](#getmetrics) - Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

## getMetrics

Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.

### Example Usage

```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { GetMetricsResponse } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";
import { MetricName } from "@hathora/cloud-sdk-typescript/dist/sdk/models/shared";

const sdk = new HathoraCloud();

sdk.metricsV1.getMetrics({
  appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
  end: 9255.97,
  metrics: [
    MetricName.Cpu,
    MetricName.Memory,
    MetricName.Cpu,
    MetricName.RateEgress,
  ],
  processId: "cbfcddd2-0006-43ae-996c-995fff7bed2e",
  start: 202.18,
  step: 368241,
}, {
  auth0: "",
}).then((res: GetMetricsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetMetricsRequest](../../models/operations/getmetricsrequest.md)   | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `security`                                                                     | [operations.GetMetricsSecurity](../../models/operations/getmetricssecurity.md) | :heavy_check_mark:                                                             | The security requirements to use for the request.                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetMetricsResponse](../../models/operations/getmetricsresponse.md)>**

