const GOOGLE_API_KEY = "";
// AIzaSyAVSR63ZxpERYp359ItqZlxacXjH4rlsdI

//we have to keep this in env files while deploying and all for the better security. 

export const YOUTUBE_LIKED_VIDEO = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";