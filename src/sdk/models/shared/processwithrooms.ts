/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ExposedPort } from "./exposedport";
import { Region } from "./region";
import { RoomWithoutAllocations } from "./roomwithoutallocations";
import { Expose, Transform, Type } from "class-transformer";

/**
 * A process object represents a runtime instance of your game server and its metadata.
 */
export class ProcessWithRooms extends SpeakeasyBase {
    /**
     * Tracks the number of active connections to a process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "activeConnections" })
    activeConnections: number;

    @SpeakeasyMetadata()
    @Expose({ name: "activeConnectionsUpdatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    activeConnectionsUpdatedAt: Date;

    @SpeakeasyMetadata({ elemType: ExposedPort })
    @Expose({ name: "additionalExposedPorts" })
    @Type(() => ExposedPort)
    additionalExposedPorts: ExposedPort[];

    /**
     * System generated unique identifier for an application.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId: string;

    /**
     * System generated id for a deployment. Increments by 1.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deploymentId" })
    deploymentId: number;

    /**
     * Process in drain will not accept any new rooms.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "draining" })
    draining: boolean;

    /**
     * Measures network traffic leaving the process in bytes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "egressedBytes" })
    egressedBytes: number;

    /**
     * Connection information to an exposed port on an active process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exposedPort" })
    @Type(() => ExposedPort)
    exposedPort?: ExposedPort;

    @SpeakeasyMetadata()
    @Expose({ name: "host" })
    host: string;

    @SpeakeasyMetadata()
    @Expose({ name: "idleSince" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    idleSince: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port: number;

    /**
     * System generated unique identifier to a runtime instance of your game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processId" })
    processId: string;

    /**
     * Available regions to request a game server.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;

    /**
     * Tracks the number of room slots available on the process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomSlotsAvailable" })
    roomSlotsAvailable: number;

    @SpeakeasyMetadata()
    @Expose({ name: "roomSlotsAvailableUpdatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    roomSlotsAvailableUpdatedAt: Date;

    @SpeakeasyMetadata({ elemType: RoomWithoutAllocations })
    @Expose({ name: "rooms" })
    @Type(() => RoomWithoutAllocations)
    rooms: RoomWithoutAllocations[];

    /**
     * Governs how many [rooms](https://hathora.dev/docs/concepts/hathora-entities#room) can be scheduled in a process.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roomsPerProcess" })
    roomsPerProcess: number;

    /**
     * When the process bound to the specified port. We use this to determine when we should start billing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startedAt: Date;

    /**
     * When the process started being provisioned.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startingAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    startingAt: Date;

    /**
     * When the process is issued to stop. We use this to determine when we should stop billing.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "stoppingAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    stoppingAt: Date;

    /**
     * When the process has been terminated.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "terminatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    terminatedAt: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "totalRooms" })
    totalRooms: number;
}
