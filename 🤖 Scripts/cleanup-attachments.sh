#!/bin/bash

echo "Starting cleanup script"

# Define Trash directory
TRASH_DIR="$HOME/.Trash"
OBSIDIAN_CONFIG_DIR=".obsidian"

# Check if Trash directory exists
if [ ! -d "$TRASH_DIR" ]; then
    echo "Error: Trash folder '$TRASH_DIR' not found!"
    exit 1
fi

# Check if the correct number of arguments is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <ATTACHMENTS_DIR>"
    exit 1
fi

# Define Attachments directory
ATTACHMENTS_DIR="$1"

# Check if Attachments directory exists
if [ ! -d "$ATTACHMENTS_DIR" ]; then
    echo "Error: Attachments folder '$ATTACHMENTS_DIR' not found!"
    exit 1
fi

# Find all files in the Attachments directory (including subfolders)
find "$ATTACHMENTS_DIR" -type f | while read -r attachment; do
    attachment_name=$(basename "$attachment" .md)
    echo "Checking '$attachment_name'"

    # Search for the attachment name in the current working directory and subfolders
    files_with_reference=$(grep -rl \
        --exclude-dir="$ATTACHMENTS_DIR" \
        --exclude-dir="$OBSIDIAN_CONFIG_DIR" \
        "$attachment_name" .)
    echo "File refencences found: $files_with_reference"

    if $files_with_reference > /dev/null 2>&1; then
        # If not found, move the file to Trash
        echo "Moving unused attachment to Trash: '$attachment_name'"
        mv "$attachment" "$TRASH_DIR"
    fi
done

echo "Cleanup complete for '$ATTACHMENTS_DIR'."