// Apne links yahan daalo. Khali ("") chhodoge to wo button dikhega hi nahi.
export const UPDATES_CHANNEL = ""; // e.g. "https://t.me/yourchannel"
export const DISCUSSION_GROUP = ""; // e.g. "https://t.me/yourgroup"
export const DONATION_LINK = ""; // e.g. "https://yourdonatelink.com"
export const GITHUB_REPO = ""; // e.g. "https://github.com/yourname/WorldZuno"
export const APPEAL_LINK = ""; // ban appeal ke liye, e.g. "https://t.me/yourusername"

export const allowedChatSearchKeys = ["global", "group"] as const;
export const allowedChatTimeKeys = [
  "today",
  "week",
  "month",
  "year",
  "all",
] as const;
