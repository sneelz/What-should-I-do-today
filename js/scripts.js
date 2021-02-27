// define variables
const activities = activityData.activities;
const $activity = $('#activity');

// clear out old data before new request
function clearActivity() {
    $activity.html('');
};

// load random activity
function loadActivity() {
    clearActivity();
    
    const randomNumber = Math.floor(Math.random() * activities.length);
    const activity = activities[randomNumber].activity;
    const activityLink = activities[randomNumber].hyperlink;

    if (activityLink) {
        $activity.append('<a href="' + activityLink + '" target="_blank">' + activity + '</a>');
    }
    else {
        $activity.append(activity);
    }
};

window.onload = loadActivity();
