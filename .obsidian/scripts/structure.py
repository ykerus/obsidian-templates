import os
from typing import Tuple
from datetime import datetime, timedelta

BASE_FOLDER = "00. 📓 Log"
DAILY_FOLDER = "🗒 Daily"
YEAR_FOLDER_EMOJI = "🗓"

MONTH_NAME = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
}


def is_daily_note(fname: str) -> bool:
    return fname.startswith("20")


def split_date(date: str) -> Tuple[int, int, int]:
    year, month, day = date.split("-")
    return int(year), int(month), int(day)


def get_note_date(note_name: str) -> str:
    date = note_name.split(",")[0]
    return date


def get_new_daily_note_folder(
    base_folder: str,
    year_folder_emoji: str,
    year: int,
    month: int,
) -> str:
    base_year = os.path.join(base_folder, f"{year_folder_emoji} {year}")
    new_folder = os.path.join(base_year, MONTH_NAME[month])
    return new_folder


def move_daily_note(note_name: str, folder_from: str, folder_to: str) -> bool:
    os.makedirs(folder_to, exist_ok=True)
    print(folder_from, folder_to)
    file_path = os.path.join(folder_from, note_name)
    new_file_path = os.path.join(folder_to, note_name)
    if os.path.exists(new_file_path):
        print(f"WARNING: {new_file_path} already exists, skipping...")
        return False
    os.rename(file_path, new_file_path)
    return True


def get_difference_in_dates(date1: str, date2: str) -> int:
    d1_date = datetime.strptime(date1, "%Y-%m-%d")
    d2_date = datetime.strptime(date2, "%Y-%m-%d")
    return (d1_date - d2_date).days


def before_today(date: str) -> bool:
    date_today = datetime.today().strftime("%Y-%m-%d")
    return get_difference_in_dates(date_today, date) > 0


def structure_daily_notes(
    base_folder: str,
    daily_folder: str,
    year_folder_emoji: str,
) -> None:

    notes, moved = 0, 0
    daily_notes_folder = os.path.join(base_folder, daily_folder)
    for daily_note in os.listdir(daily_notes_folder):
        if not is_daily_note(daily_note):
            continue
        notes += 1

        date = get_note_date(daily_note)
        if not before_today(date):
            continue

        year, month, _ = split_date(date)
        new_daily_notes_folder = get_new_daily_note_folder(
            base_folder, year_folder_emoji, year, month
        )
        moved += move_daily_note(daily_note, daily_notes_folder, new_daily_notes_folder)

    print(f"Found {notes} daily notes, " + f"moved {moved}")


if __name__ == "__main__":
    structure_daily_notes(
        base_folder=BASE_FOLDER,
        daily_folder=DAILY_FOLDER,
        year_folder_emoji=YEAR_FOLDER_EMOJI,
    )
