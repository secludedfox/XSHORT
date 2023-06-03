// My first Addon...
browser.runtime.onMessage.addListener(parse_short);
console.log("XSHORT Version V1.5 Running");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


catch_word = [
    "】",
    "【",
    "Whopper",
    "whopper",
    "#viral",
    "#goviral",
    "Relationship Tip",
    "#npcsarebecomingsmart",
    "😱",
    "Crypto",
    "fart",
    "FART",
    "😂😂😂",
    "😂😂",
    "#gtag",
    "in OHIO",
    "in Ohio",
    "in ohio",
    "#satisfying",
    "#hamburgerhelper",
    "💯",
    "respect",
    "Respect",
    "ninja",
    "😭",
    "gacha",
    "#gachaclub",
    "#gachaedit",
    "#getmeviral",
    "#trending",
    "iOS 16",
    "IOS 16",
    "ios 16",
    "Drugs",
    "drugs",
    "￼",
    "ASMR",
    "#ASMR",
    "#asmr",
    "I WISH",
    "I wish",
    "🥰",
    "#phonk",
    "#subscribe",
    "fnaf",
    "FNAF",
    "#sendthistoyourbestfriend",
    "#budcreate",
    "toilet",
    "absolutely crazy",
    "Sus",
    "Pet Foolery",
    "watch until the end",
    "#Please_Subscribe",
    "#dragonballlegends",
    "#dblegends",
    "#pvp",
    "#onetap",
    "#mrbeast",
    "#hasbro",
    "BF EX",
    "#roblox",
    "💦",
    "#tiktok",
    "pinned comment",
    "twerking",
    "WEDNESDAY",
    "GLOW UP",
    "Subscribe because",
    "#Gacha",
    "Gacha",
    "#GachaClub",
    "😳",
    "WATCH FOR",
    "#trending",
    "#viralvideo",
    "BANNED",
    "#thirsttrap",
    "#anime",
    "MrBeast",
    "sussy",
    "sking AI",
    "sking ai",
    "see description",
    "Let Me Do It",
    "Urinal",
    "urinal",
    "#prank",
    "WAIT FOR IT",
    "do it for you",
    "tyson",
    "BAN",
    "TikTok",
    "grounded for",
    "Am I the Jerk?",
    "#saveapexlegends",
    "Harvard",
    "Dark humour",
    "Among Us",
    "#henna",
    "SONIC",
    "Sonic",
    "Harry Potter",
    "#comedyshorts",
    "I CAN’T believe",
    "goku",
    "😍",
    "Roblox",
    "roblox",
    "ROBLOX",
    "I bet",
    "#fashionyoutuber",
    "#fashionvideo",
    "#outfitideas",
    "@kpopfication",
    "kpop",
    "bts",
    "😩",
    "😨",
    "#fyp",
    "IshowSpeed",
    "Clickers Breed",
    "tiktok",
    "Dr. Livesey",
    "#teentitansgo",
    "Wednesday adams",
    "Dragon Ball",
    "Goku",
    "hosty sings wellerman",
    "WOOPER",
    "SHE ACTUALLY THOUGHT I WAS CHEATING",
    "Minecraft Rap",
    "makes ur legs go numb",
    "#momlife",
    "#momcomedy",
    "#parentin",
    "#httyd",
    "#toothless",
    "#howtotrainyourdragon",
    "#idk",
    "#ohio",
    "#recommended",
    "#gta",
    "#zombie",
    "TOCA TOCA TOCA",
    "Mr. Beast",
    "Amazing work",
    "Cool DIY",
    "#woodmood",
    "Link in Comments",
    "candy pills",
    "Alphabet Lore",
    "alphabet lore",
    "Metro Man is fast, but this guy",
    "#gravityfalls",
    "Gorilla Tag",
    "gorilla Tag",
    "gorilla tag",
    "that don’t feel real",
    "doors open at monsters",
    "Wednesday dancing",
    "biggest bird",
    "avorite?",
    "Phonk Troll",
    "🤩🥺",
    "Biggest Bird",
    "TROLL FACE",
    "#dakotajohnson",
    "RESPECT",
    "FunkoPop",
    "LifeHack",
    "Tiktok"
]



// adds todays date
const yt_date = new Date();
const yt_month = months[yt_date.getMonth()];
const yt_bad_date = `${yt_month} ${yt_date.getDate()}, ${yt_date.getFullYear()}`;
const yt_bad_date2 = `${yt_date.getDate()} ${yt_month}, ${yt_date.getFullYear()}`;
catch_word.push(yt_bad_date);
catch_word.push(yt_bad_date2);
var rn = false;




new_blocked_channels = {"banned_channels": ["aarons8675"]};

function SKIP_VID(){
    // yt could probably change this method at some point 
    document.getElementById("navigation-button-down").getElementsByTagName("ytd-button-renderer")[0].click();
}

function bk_channel(){
    new_blocked_channels.banned_channels.push(yt_short_author);
    browser.storage.local.set({"banned_channels" : new_blocked_channels.banned_channels});
    console.log("Blocked Channel...");
    SKIP_VID();
}

function parse_short(ytshortid) {
    let skip_it = false;
    let found_pnt = 0;

    yt_short_title = document.querySelector("ytd-reel-video-renderer[is-active]").getElementsByClassName("title")[0].innerText
    yt_short_author = document.querySelector("ytd-reel-video-renderer[is-active]").querySelectorAll("yt-formatted-string.ytd-channel-name")[1].innerText;
    
    
    // if title and channel is readable
    if(yt_short_title != "" && yt_short_author != ""){
        // if its a new short 
        if (ytshortid.ytshortid == "NS"){

            for(let i = 0; i < catch_word.length; i++){
                if(yt_short_title.includes(catch_word[i])){
                    skip_it = true;
                    found_pnt++;
                }
            }

            for(let i = 0; i < new_blocked_channels.banned_channels.length; i++){
                if(yt_short_author.includes(new_blocked_channels.banned_channels[i])){
                    skip_it = true;
                    found_pnt++;
                }
            }

            if(skip_it){
                console.log(`Skipped Video! Matches Found: ${found_pnt}`);
                setTimeout(SKIP_VID, 160);
            }
        }
        else if (ytshortid.ytshortid == "BC") {
            new_blocked_channels.banned_channels.push(yt_short_author);
            browser.storage.local.set({"banned_channels" : new_blocked_channels.banned_channels});
            console.log("Blocked Channel...");
            SKIP_VID();
        }



        let block_btn = document.querySelectorAll("button[id='block_usr']");
        for (let i = 0; i < block_btn.length; i++) {
            block_btn[i].remove();
        }


        btn = document.createElement("button");
        btn.innerText= "Block Channel";
        btn.id = "block_usr";
        btn.style = "background-color: #272727; color: #777777; border: 2px solid #777777; border-radius: 10px;";
        document.querySelector("ytd-reel-video-renderer[is-active]").querySelector("div[id='actions']").prepend(btn)

        console.log("added listener");
        var dtn = document.getElementById("block_usr");
        dtn.addEventListener("click", bk_channel);
    } 
}

function onGot(item) {
  if(item.banned_channels == undefined){
    // set it to a null account
    new_blocked_channels.banned_channels = ["@aarons8675"];
  } else {
    new_blocked_channels.banned_channels = item.banned_channels;
    console.log(`Loaded Blocked Channels... (${new_blocked_channels.banned_channels.length})`);
  }
}

function onError(error) {
  console.debug(`Error: ${error}`);
}

let tmp_new_blocked_channels = browser.storage.local.get();
tmp_new_blocked_channels.then(onGot, onError);

