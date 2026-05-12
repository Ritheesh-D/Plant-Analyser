/**
 * Formats a date string into a structured object containing
 * exact date and time strings as per requirements.
 * Uses toLocaleString for robust timezone-aware formatting.
 * 
 * @param {string|Date} dateSource - The date string or object from Supabase (usually UTC)
 * @returns {Object} { date, time, full, rawDate }
 */
export const formatScanTimestamp = (dateSource) => {
  if (!dateSource) return { date: "Unknown Date", time: "", full: "Unknown Date", rawDate: null };
  
  // Ensure the date is treated as UTC if it's a string without timezone info
  let date = new Date(dateSource);
  
  // If the dateSource is a string and doesn't end with Z or an offset, 
  // and we suspect it's UTC from Supabase:
  if (typeof dateSource === 'string' && !dateSource.includes('Z') && !dateSource.includes('+')) {
    // Append Z to force UTC interpretation if it's coming from a 'timestamp' column
    const utcDate = new Date(`${dateSource.replace(' ', 'T')}Z`);
    if (!isNaN(utcDate.getTime())) {
      date = utcDate;
    }
  }

  // Handle invalid dates
  if (isNaN(date.getTime())) {
    return { date: "Unknown Date", time: "", full: "Unknown Date", rawDate: null };
  }

  // Date → DD/MM/YYYY using locale for India (en-IN) as a reliable DD/MM/YYYY format
  const dateStr = date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  // Time → hh:mm AM/PM
  const timeStr = date.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();

  return {
    date: dateStr,
    time: timeStr,
    full: `${dateStr} • ${timeStr}`,
    rawDate: date
  };
};

/**
 * Parses a YYYY-MM-DD string from a date picker into a local Date object
 * at the very beginning or end of the day.
 */
export const parseLocalPickerDate = (dateStr, endOfDay = false) => {
  if (!dateStr) return null;
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  if (endOfDay) {
    date.setHours(23, 59, 59, 999);
  } else {
    date.setHours(0, 0, 0, 0);
  }
  return date;
};
