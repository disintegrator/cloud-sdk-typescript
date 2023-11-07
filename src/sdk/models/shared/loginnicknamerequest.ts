/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LoginNicknameRequest extends SpeakeasyBase {
    /**
     * An alias to represent a player.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nickname" })
    nickname: string;
}
