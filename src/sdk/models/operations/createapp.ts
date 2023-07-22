/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateAppSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class CreateAppResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    application?: shared.Application;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    createApp422ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    createApp500ApplicationJSONString?: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
