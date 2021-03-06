﻿import { ItemType } from "./itemType"

export class ArtifactItem {
    itemType: ItemType;
    path: string;
    fileLength: number;
    lastModified: Date;
    contentType: string;
    metadata: { [key: string]: string }

    constructor() {
        this.metadata = {};
    }
}