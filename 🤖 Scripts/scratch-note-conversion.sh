#!/bin/bash

# Converts "scratch" to "note" and vice versa

VAULT_NAME="obsidian"
NOTES_FOLDER="📑 Notes"
SCRATCH_FOLDER="📝 Scratch"

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

# Check which operation to run (scratch-to-note or note-to-scratch)
if grep -q "\- scratch" "$FILE_PATH" || grep -q "\[\[Scratch\]\]" "$FILE_PATH"; then
    OPERATION="scratch-to-note"
    SOURCE_LOWER="scratch"
    SOURCE_CAPITALIZED="Scratch"
    DESTINATION_LOWER="note"
    DESTINATION_CAPITALIZED="Note"
    DESTINATION_FOLDER="$NOTES_FOLDER"
elif grep -q "\- note" "$FILE_PATH" || grep -q "\[\[Note\]\]" "$FILE_PATH"; then
    OPERATION="note-to-scratch"
    SOURCE_LOWER="note"
    SOURCE_CAPITALIZED="Note"
    DESTINATION_LOWER="scratch"
    DESTINATION_CAPITALIZED="Scratch"
    DESTINATION_FOLDER="$SCRATCH_FOLDER"
else
    echo "Error: file seems not to be Scratch nor Note"
    exit 1
fi

# Check if the destination folder exists
if [ ! -d "$DESTINATION_FOLDER" ]; then
    echo "Error: Destination folder '$DESTINATION_FOLDER' not found!"
    exit 1
fi

# Replace lowercase source with lowercase destination in the file
sed -i '' "s/- $SOURCE_LOWER/- $DESTINATION_LOWER/g" "$FILE_PATH"

# Replace capitalized source with capitalized destination in the file
sed -i '' "s/\[\[$SOURCE_CAPITALIZED\]\]/\[\[$DESTINATION_CAPITALIZED\]\]/g" "$FILE_PATH"

# Move the file to the destination folder
NEW_FILE_PATH="$DESTINATION_FOLDER/$(basename "$FILE_PATH")"
mv "$FILE_PATH" "$NEW_FILE_PATH"

echo "File has been updated and moved to '$DESTINATION_FOLDER'"

# URL encode the new file path
ENCODED_NEW_FILE_PATH=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$NEW_FILE_PATH'''))")

# Construct the URI to open the new file in Obsidian
URI="obsidian://open?vault=${VAULT_NAME}&file=${ENCODED_NEW_FILE_PATH}"

# Open the URI
open "$URI"
