/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInactiveRoomsForProcessDeprecatedRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processId" })
    processId: string;
}

export class GetInactiveRoomsForProcessDeprecatedResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata({ elemType: shared.RoomWithoutAllocations })
    roomWithoutAllocations?: shared.RoomWithoutAllocations[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
