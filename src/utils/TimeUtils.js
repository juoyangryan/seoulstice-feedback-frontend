// Converts a time string in the format "hour:minute:second" or "minute:second" to seconds
export function timeToSeconds(timeString) {
  const timeParts = timeString.split(":").map(Number);

  if (timeParts.length === 3) {
    // Format: hour:minute:second
    const [hours, minutes, seconds] = timeParts;
    return hours * 3600 + minutes * 60 + seconds;
  } else if (timeParts.length === 2) {
    // Format: minute:second
    const [minutes, seconds] = timeParts;
    return minutes * 60 + seconds;
  } else {
    // Invalid format
    throw new Error("Invalid time format");
  }
}
