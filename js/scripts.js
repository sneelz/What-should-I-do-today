// define variables
var $activity = $('#activity');

var activityData = {
    "activities": [
        {
            "activity": "Netflix and chill",
            "hyperlink": "https://netflix.com"
        },
        {
            "activity": "Watch a TED Talk",
            "hyperlink": "https://www.ted.com/talks"
        },
        {
            "activity": "Learn to code",
            "hyperlink": "https://www.codecademy.com/"
        },
        {
            "activity": "Play League of Legends",
            "hyperlink": "https://play.na.leagueoflegends.com/en_US",
        },
        {
            "activity": "Play Pokemon Go",
            "hyperlink": "https://www.pokemongo.com/en-us/",
        },
        {
            "activity": "Watch the San Diego Zoo Live Cams",
            "hyperlink": "https://zoo.sandiegozoo.org/live-cams",
        },
        {
            "activity": "Watch the Monterey Bay Aquarium Live Cams",
            "hyperlink": "https://www.montereybayaquarium.org/animals/live-cams",
        },
        {
            "activity": "Watch some puppies",
            "hyperlink": "https://explore.org/livecams/currently-live/service-puppy-cam",
        },
        {
            "activity": "Learn something new on Khanh Academy",
            "hyperlink": "https://www.khanacademy.org/",
        },   
        {
            "activity": "Learn about astronomy",
            "hyperlink": "https://www.khanacademy.org/science/physics/cosmology-and-astronomy",
        },
        {
            "activity": "Learn about biology",
            "hyperlink": "https://www.khanacademy.org/science/biology",
        },
        {
            "activity": "Learn about chemistry",
            "hyperlink": "https://www.khanacademy.org/science/chemistry",
        },
        {
            "activity": "Learn about computer science",
            "hyperlink": "https://www.khanacademy.org/computing/computer-science",
        },
        {
            "activity": "Learn about U.S. history",
            "hyperlink": "https://www.khanacademy.org/humanities/us-history",
        },
        {
            "activity": "Learn about world history",
            "hyperlink": "https://www.khanacademy.org/humanities/world-history",
        },
        {
            "activity": "Learn about art history",
            "hyperlink": "https://www.khanacademy.org/humanities/art-history",
        },
        {
            "activity": "Learn about macroeconomics",
            "hyperlink": "https://www.khanacademy.org/economics-finance-domain/macroeconomics",
        },
        {
            "activity": "Learn about microeconomics",
            "hyperlink": "https://www.khanacademy.org/economics-finance-domain/microeconomics",
        },
        {
            "activity": "View resources from NASA",
            "hyperlink": "https://www.nasa.gov/specials/nasaathome/index.html",
        },
        {
            "activity": "Bake chocolate chip cookies",
            "hyperlink": "https://www.foodnetwork.com/recipes/alton-brown/the-chewy-recipe-1909046",
        },
        {
            "activity": "Bake some brownies",
            "hyperlink": "https://www.allrecipes.com/recipe/10549/best-brownies/",
        },
        {
            "activity": "Take a virtual tour of the Louvre",
            "hyperlink": "https://www.louvre.fr/en/visites-en-ligne",
        },
        {
            "activity": "Play with Legos",
            "hyperlink": "https://www.lego.com/en-us",
        },
        {
            "activity": "Learn to cook",
            "hyperlink": "https://cooking.nytimes.com/learn-to-cook",
        },
        {
            "activity": "Workout at home",
            "hyperlink": "https://www.youtube.com/results?search_query=at+home+workout",
        },
        {
            "activity": "Do some yoga",
            "hyperlink": "https://www.doyogawithme.com/",
        },
        {
            "activity": "Lurk Reddit",
            "hyperlink": "https://reddit.com",
        },
        {
            "activity": "Clean your room",
            "hyperlink": "https://www.wikihow.com/Clean-Your-Room"
        },
        {
            "activity": "Clean your bathroom",
            "hyperlink": "https://www.goodhousekeeping.com/home/cleaning/g31292850/how-to-clean-bathroom/"
        },
        {
            "activity": "Clean your fridge",
            "hyperlink": "https://www.goodhousekeeping.com/uk/house-and-home/household-advice/a684998/how-clean-is-your-fridge/"
        },
        {
            "activity": "Explore arts and culture",
            "hyperlink": "https://artsandculture.google.com/?hl=en",
        },
        {
            "activity": "Tidy up",
            "hyperlink": "https://konmari.com/",
        },
        {
            "activity": "Watch America's Got Talent performances",
            "hyperlink": "https://www.youtube.com/results?search_query=america%27s+got+talent",
        },
        {
            "activity": "Watch American Idol performances",
            "hyperlink": "https://www.youtube.com/results?search_query=american+idol",
        },
        {
            "activity": "Watch The Voice performances",
            "hyperlink": "https://www.youtube.com/results?search_query=the+voice",
        },
        {
            "activity": "Watch makeup tutorials",
            "hyperlink": "https://www.youtube.com/results?search_query=makeup+tutorial",
        },
        {
            "activity": "Play a card game",
            "hyperlink": "https://www.pagat.com/",
        },
        {
            "activity": "Play sudoku",
            "hyperlink": "https://www.websudoku.com/",
        },
        {
            "activity": "Learn morse code",
            "hyperlink": "https://morse.withgoogle.com/learn/",
        },
        {
            "activity": "Learn a language",
            "hyperlink": "https://www.duolingo.com/",
        },
        {
            "activity": "Practice your vocabulary",
            "hyperlink": "https://freerice.com/",
        },
        {
            "activity": "Meditate",
            "hyperlink": "https://www.mindful.org/how-to-meditate/",
        },
        {
            "activity": "Learn to draw",
            "hyperlink": "https://www.youtube.com/results?search_query=drawing+tutorial",
        },
        {
            "activity": "Do your nails",
            "hyperlink": "https://www.youtube.com/results?search_query=how+to+do+your+nails",
        },
        {
            "activity": "Read a book",
            "hyperlink": "https://www.gutenberg.org/"
        },
        {
            "activity": "Create a website",
            "hyperlink": "https://www.wix.com/"
        },
        {
            "activity": "Start a skincare routine",
            "hyperlink": "https://www.nytimes.com/guides/tmagazine/skincare-routine"
        },
        {
            "activity": "Create a mood board",
            "hyperlink": "https://spark.adobe.com/make/mood-board-maker/"
        },
        {
            "activity": "Learn calligraphy",
            "hyperlink": "https://www.youtube.com/results?search_query=calligraphy+tutorial"
        },
        {
            "activity": "Do the NYT Crossword Puzzle",
            "hyperlink": "https://www.nytimes.com/crosswords"
        },
        {
            "activity": "Update your resume",
            "hyperlink": "https://zety.com/blog/resume-tips"
        },
        {
            "activity": "Write a cover letter",
            "hyperlink": "https://resumegenius.com/blog/cover-letter-help/cover-letter-tips"
        },
        {
            "activity": "Learn to knit",
            "hyperlink": "https://www.youtube.com/results?search_query=knitting+tutorial"
        },
        {
            "activity": "Hangout with someone on Google Hangouts",
            "hyperlink": "https://hangouts.google.com/"
        },
        {
            "activity": "Try to make something you see on Pinterest",
            "hyperlink": "https://www.pinterest.com/"
        },
        {
            "activity": "Make a cocktail",
            "hyperlink": "https://makemeacocktail.com/"
        },
        {
            "activity": "Learn how to do your hair",
            "hyperlink": "https://www.youtube.com/results?search_query=hair+tutorial"
        },
        {
            "activity": "Learn to dance",
            "hyperlink": "https://www.youtube.com/results?search_query=dance+tutorial"
        },
        {
            "activity": "Learn origami",
            "hyperlink": "https://origami.me/diagrams/"
        },
        {
            "activity": "Call your mom"
        },
        {
            "activity": "Call your dad"
        },
        {
            "activity": "Call a friend"
        },
        {
            "activity": "Call a relative"
        },
        {
            "activity": "Go for a walk (at least 6ft from others)"
        },
        {
            "activity": "Write a letter to your future self"
        },
        {
            "activity": "Build a fort"
        },
        {
            "activity": "Alphebetize your spice cabinet"
        },
        {
            "activity": "Take a nap"
        },
        {
            "activity": "Write a story"
        },
        {
            "activity": "Write a song"
        },
        {
            "activity": "Play a board game"
        },
        {
            "activity": "Do a puzzle"
        },
        {
            "activity": "Learn an instrument"
        },
        {
            "activity": "Watch a movie"
        },
        {
            "activity": "Get dressed up with nowhere to go"
        },
        {
            "activity": "Play an old video game"
        },
        {
            "activity": "Organize your kitchen"
        },
        {
            "activity": "Organize your closet"
        },
        {
            "activity": "Take a bubble bath"
        },
        {
            "activity": "Color a coloring book"
        },
        {
            "activity": "Do an at-home wine tasting"
        },
        {
            "activity": "Do your taxes"
        },
        {
            "activity": "Teach your pet a new trick"
        },
        {
            "activity": "Watch the Harry Potter movies"
        },
        {
            "activity": "Watch the Star Wars movies"
        },
        {
            "activity": "Watch the Lord of the Rings movies"
        },
    ]
};

// clear out old data before new request
function clearActivity() {
    $activity.html("");
};

// load random activity
function loadActivity() {
    clearActivity();
    
    var randomNumber = Math.floor(Math.random() * activityData.activities.length);

    var activity = activityData.activities[randomNumber].activity;
    var activityLink = activityData.activities[randomNumber].hyperlink;

    if (activityLink) {
        $activity.append('<a href="' + activityLink + '" target="_blank">' + activity + '</a>');
    }
    else {
        $activity.append(activity);
    }
};

window.onload = loadActivity();

