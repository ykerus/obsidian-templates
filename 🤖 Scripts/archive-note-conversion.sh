#!/bin/bash

# Script to archive or un-archive a note in Obsidian

VAULT_NAME="obsidian"
ARCHIVE_FOLDER="🗄️ Archive"
INBOX_FOLDER="📥 Inbox"
ARCHIVE_TAG="archived"

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <FILE_PATH>"
    exit 1
fi

# Assign arguments to variables
FILE_PATH="$1"

# Check if the file exists
if [ ! -f "$FILE_PATH" ]; then
    echo "Error: File '$FILE_PATH' not found!"
    exit 1
fi

# Check if the file contains the "archived" tag
if grep -q "\- $ARCHIVE_TAG" "$FILE_PATH"; then
    # Un-archive the note
    OPERATION="un-archive"
    DESTINATION_FOLDER="$INBOX_FOLDER"
    sed -i '' "/- $ARCHIVE_TAG/d" "$FILE_PATH" # Remove the archived tag
else
    # Archive the note
    OPERATION="archive"
    DESTINATION_FOLDER="$ARCHIVE_FOLDER"
    sed -i '' "s/tags:/tags:\n  - $ARCHIVE_TAG/g" "$FILE_PATH"
fi

# Check if the destination folder exists
if [ ! -d "$DESTINATION_FOLDER" ]; then
    echo "Error: Destination folder '$DESTINATION_FOLDER' not found!"
    exit 1
fi

# Move the file to the destination folder
NEW_FILE_PATH="$DESTINATION_FOLDER/$(basename "$FILE_PATH")"
mv "$FILE_PATH" "$NEW_FILE_PATH"

echo "File has been $OPERATION'd and moved to '$DESTINATION_FOLDER'"

# URL encode the new file path
ENCODED_NEW_FILE_PATH=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$NEW_FILE_PATH'''))")

# Construct the URI to open the new file in Obsidian
URI="obsidian://open?vault=${VAULT_NAME}&file=${ENCODED_NEW_FILE_PATH}"

# Open the URI
open "$URI"