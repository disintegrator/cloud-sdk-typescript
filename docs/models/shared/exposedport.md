# ExposedPort

Connection information to an exposed port on an active process.


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `host`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `name`                                                                              | *string*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `port`                                                                              | *number*                                                                            | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `transportType`                                                                     | [TransportType](../../models/shared/transporttype.md)                               | :heavy_check_mark:                                                                  | Transport type specifies the underlying communication protocol to the exposed port. |