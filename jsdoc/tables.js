// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------
/**
@typedef tableDefinition
@description Specifies options for table access
@property {boolean} authorize=false - Execute the {@link module:azure-mobile-apps/express/middleware/authorize authorize middleware} for each table operation
@property {boolean} autoIncrement=false - Automatically increment the id column on each insert
@property {boolean} dynamicSchema=true - Dynamically create table schema
@property {string} name - Name of the table
*/
