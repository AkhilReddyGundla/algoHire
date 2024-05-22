// src/data/questions.js
export const questions = [
    {
      id: 1,
      text: "Hey there! How smart & safe are you on the internet?",
      options: [
        { id: 'a', text: "Ugh, yeah. It's like, how do people even fall for those?" },
        { id: 'b', text: "Yep! Super annoying, right?" },  // Correct Answer
      ],
      // correctAnswer: 'b'
      response : [
        {id : 'a' , text : "Not everyone is as savvy as you! The internet can be awesome, but there are also some shady corners. Let's make sure you know how to stay protected."},
        {id : 'b' , text : "Totally!  Sometimes those scams can be tricky to spot.  But don't worry – I'm here to help you become an online ninja!"}
      ],
      feedBack : "Let's dive into the first topic: Guarding your personal info!"
    },
    {
      id: 2,
      text: `Okay, imagine this: You sign up for the latest super-trending app, InstaSnap. 
      It asks for your full name, birthday, school, mail ID, contact number.
      Do you...`,
      options: [
        { id: 'a', text: "Fill everything & get on that app ASAP!" },
        { id: 'b', text: "Give the bare minimum to sign up." },  // Correct Answer
        {id : 'c', text : "Check with a parent or trusted adult first"},

      ],
      
      response : [
        {id : 'a' , text : "Yes, lots of people do that. But think of your personal info like your house keys –  you wouldn't hand those out to just anyone!  Your online data is valuable, and it can be misused if it falls into the wrong hands."},
        {id : 'b' , text : "Good instincts!  Less is more when it comes to what you share online.Think of your personal info like your house keys –  you wouldn't hand those out to just anyone!  Your online data is valuable, and it can be misused if it falls into the wrong hands."},
        {id : 'c' , text : "Smart move! Always good to get a second opinion on these things. Think of your personal info like your house keys –  you wouldn't hand those out to just anyone!  Your online data is valuable, and it can be misused if it falls into the wrong hands."}
      ],
      feedBack : "Your online data is valuable, and it can be misused if it falls into the wrong hands."
    },
    
    {
      id: 3,
      text: `You're about to post a funny pic on InstaSnap. The privacy options are set to "Public." 
      Do you:
      `,
      options: [
        { id: 'a', text: "Post it anyway, the more people, the better!" },
        { id: 'b', text: 'Change it to "Friends Only" or "Visible to selective people' },  // Correct Answer
        {id : 'c', text : "Decide not to post it after all"},

      ],
      
      response : [
        {id : 'a' , text : "Sharing laughs is great, but remember – the internet is forever! Once it's public, you lose control over where your pic ends up, even if you delete it later. Think twice before sharing with the whole world"},
        {id : 'b' , text : 'Nice one! Limiting your audience is a smart way to stay in charge of your online stuff. Remember, even "Friends Only" can be wider than you think.'},
        {id : 'c' , text : "Sometimes the safest choice is not to share at all. That's okay! If it feels a little iffy, listen to your gut."}
      ],
      feedBack : "Being internet savvy means thinking before you click or post! You get to decide who sees your posts! Think before you click – would you be okay with anyone and everyone seeing that? Even if you delete it later, someone might have already screenshotted what you posted. Your personal info is precious – keep it safe!"
    },
    {
      id: 4,
      text: `Beep-boop!  You have a new email!  The subject line screams: "URGENT: You've Won $10,000!  Click Here to Claim!" Do you...`,
      options: [
        { id: 'a', text: "Click the link immediately – jackpot!" },
        { id: 'b', text: 'Delete the email or mark it as spam.' }, 

      ],
      
      response : [
        {id : 'a' , text : `Whoa there! Sadly, those "you won the lottery" emails are almost always scams. They're designed to trick you into clicking dangerous links or giving away personal information.`},
        {id : 'b' , text : `Smart move! When in doubt, delete it out. It's the safest way to dodge those sneaky phishing attempts.`},
       
      ],
      feedBack : `If an email seems too good to be true, it probably is.  
      Don't click on links or give out personal info in response to suspicious emails.
      `
    },
    // {
    //   id : 'information',
    //   text : ` Here's the trick with these scams:  
    //   They look official with urgent language or exciting promises.  But before you click...
    //   Scam Check 1: Misspellings or weird email addresses are a red flag.
    //   Scam Check 2: Hover over links (don't click!) to see where they REALLY go. Does it match the sender?
    //   Scam Check 3: When in doubt, search it out!
      
    //   Ready to move on to secure online habits?
    //   * * * * * *
    //   `
    // },
    {
      id: 5,
      text: `Speaking of habits, let's talk about passwords!  
      Imagine you're setting up a new account. Which password is the strongest?
      `,
      options: [
        { id: 'a', text: "Your cat's name (Fluffy)" },
        { id: 'b', text: 'Your birthday (08122006)' }, 
        { id: 'c', text: 'A random jumble of letters, numbers & symbols (a$Df!23zX)' }, 

      ],
      
      response : [
        {id : 'a' , text : `Aww, Fluffy's cute, but makes a lousy password!  It's easily guessable, especially if you talk about your pet online`},
        {id : 'b' , text : `Nope!  Birthdays are another piece of personal info that scammers can find and use to crack your accounts`},
        {id : 'c' , text : `Yes!  That's the way to go. The longer and more random your password, the harder it is to hack.`},
       
      ],
      feedBack : `Password Pro Tips:
      Make them long (at least 8 characters)
      Mix it up! Use upper & lowercase letters, numbers, and symbols.
      Never reuse the same password for multiple accounts!
      `
    },
    // {
    //   id : 'information',
    //   text : `Got a bunch of passwords to remember?
    //   Consider using a password manager – it's like a super secure vault for your logins.
    //   `
    // }

    {
      id: 6,
      text: ` Uh oh, your phone battery dies right when you want to check your InstaSnap feed!  You spot an empty library computer. Do you...
      `,
      options: [
        { id: 'a', text: " Log into your InstaSnap on the library computer and scroll away." },
        { id: 'b', text: `Wait until you're home and use your own device` }, 
      ],
      
      response : [
        {id : 'a' , text : `Thinktwice! Public computers can sometimes have keyloggers (software that records what you type), which means someone could steal your login info. Plus, it's easy to forget to log out fully.`},
        {id : 'b' , text : ` Patient and smart! Waiting for your own device is the safest way to protect your accounts. It might be tough, but your online security is worth the wait.        `},
        {id : 'c' , text : `Yes!  That's the way to go. The longer and more random your password, the harder it is to hack.`},
       
      ],
      feedBack : `Be careful when using public computers for personal accounts. 
      It's safer to wait and use your own device to protect your information.
      
      Ready to talk about shopping online?  Things can get a bit shady there too...
      * * * * * *
      
      `
    },
    {
      id: 7,
      text: `Okay, let's say you find the coolest pair of sneakers on a site you've never heard of... and they're half the price of everywhere else! Do you:
      `,
      options: [
        { id: 'a', text: " Grab your credit card and buy them instantly! Gotta snag that deal!" },
        { id: 'b', text: `Do some digging first to check out the website and see if it's legit.` }, 
      ],
      
      response : [
        {id : 'a' , text : `Hold up!  Deals that seem too good to be true usually are.  Scammers love setting up fake stores with tempting prices.        `},
        {id : 'b' , text : ` Wise move! It's always best to research before you buy, especially from unfamiliar sites.        `},
       
      ],
      feedBack : `Here's your online shopping checklist:
      Secured Site: Look for the lock symbol and "https" in the address bar.
      Contact Info: Can you find a way to contact the store about your order?
      Reviews: See what other people are saying about the store.
      Too Good to Be True? If it feels fishy, it probably is.
      * * * * * *

      Let's move onto everyone's favorite – Malware!
      `
    },
    {
      id: 8,
      text: `Imagine this:  You're browsing online when a pop-up flashes – "Your computer is infected!  Click here to fix it NOW!"  What's your move?

      `,
      options: [
        { id: 'a', text: " Panic and click immediately! Gotta save your computer! " },
        { id: 'b', text: `Close the pop-up and ignore it` }, 
        { id: 'c', text: ` Open your antivirus software and run a scan.` }, 
      ],
      
      response : [
        {id : 'a' , text : `Whoa, slow down! Those pop-ups are designed to scare you into clicking. That's often how they install malware or viruses in the first place.`},
        {id : 'b' , text : ` Good call!  Ignoring those scary pop-ups is the right move. `},
        {id : 'c' , text : ` You got it! Running a scan with trusted antivirus software is the way to check if there's actually an issue`},
       
      ],
      feedBack : `Let's break down malware...
      Ransomware: Nasty stuff that locks up your files and demands money to unlock them. 😬
      Adware: fills your screen with annoying ads, sometimes even inappropriate ones.
      Viruses: Like a digital cold, they spread through your system and muck things up.
      

      Best Defense:
      - Keep your antivirus software up-to-date.
      - Don't click on suspicious links or downloads.
      - Back up your important files regularly (homework, photos, etc.).

      `
    },
    {
      id: 9,
      text: `You're having an amazing family vacation!  The photos are epic, and you're tempted to share them right away.  Do you...

      `,
      options: [
        { id: 'a', text: " Post those awesome pics immediately and let everyone see the fun!        " },
        { id: 'b', text: `Hold off and post the photos after you've returned home.        ` }, 
        
      ],
      
      response : [
        {id : 'a' , text : `It's great to share your adventures, but remember – posting in real-time tells everyone that there is no one at your home currently. This could make it a target for thieves.        `},
        {id : 'b' , text : `Smart choice! Waiting to share those photos until you're home adds an extra layer of security. You can still enjoy the memories without putting your home at risk.        `},
       
       
      ],
      feedBack : `Be mindful of when you share things online.  It's safer to wait until after an event, like a vacation, to post your pictures and updates.
      `
    },
    {
      id: 10,
      text: `Guess what – you just won an awesome contest!  It's super exciting, and you want to tell everyone. Do you...

      `,
      options: [
        { id: 'a', text: " Post about it immediately, with all the juicy details!        " },
        { id: 'b', text: `Wait to post until you actually have the prize in hand.        ` }, 
        
      ],
      
      response : [
        {id : 'a' , text : ` I get the excitement, but hold on! Even positive info can sometimes attract unwanted attention. Plus, the internet is forever – that post will still be around long after the initial thrill.
        `},
        {id : 'b' , text : ` Great call! Waiting to share confirms it's real and lets you focus on enjoying your prize without too much public attention. Remember, real friends will be excited for you whenever you share the news!
        `},
       
       
      ],
      feedBack : `Think before you click!  The internet has a long memory. It's okay to keep some things private, even happy things, to protect yourself down the line.
      * * * * * *
      Time for a tricky one: Apps! They're fun, but some can be sneaky...
      
      `
    },
    {
      id: 11,
      text: `You see an ad for a super cool game App with awesome graphics: "Transform into your favorite superhero!  Download now for FREE!"  What's your next move?


      `,
      options: [
        { id: 'a', text: " Download it immediately – gotta try those superpowers! " },
        { id: 'b', text: `Check out reviews and ratings before downloading.        ` }, 
        
      ],
      
      response : [
        {id : 'a' , text : ` Slow down there! "Free" apps often have hidden costs. They might bombard you with ads, try to get you to buy in-app stuff, or even contain malware.
        `},
        {id : 'b' , text : ` Great thinking! Reading reviews is the smartest way to see if an app is really as awesome as it says, and if it's safe to download.
        `},
       
       
      ],
      feedBack : `Be cautious of "free" apps.  Always check reviews and ratings to see what others are saying before you download. Remember, sometimes it's worth paying a few bucks for a quality app instead of risking a shady free one.

      Before you download anything,  check these things:
      Reviews & Ratings: What are real users saying? Are there complaints about ads or scams?
      Permissions: Does the app ask for access to your contacts, camera, etc.? Make sure it makes sense for what the app does.
      The Developer: Have they created other reputable apps?
      * * * * * *

      Okay, this next one is important - scammers are getting creative,  so listen up!

      
      `
    },
    {
      id: 12,
      text: `Uh-oh!  You get a text: "Critical Virus Detected on Your Phone!  Tech Support here

      `,
      options: [
        { id: 'a', text: " Give them access right away, gotta fix that virus!        " },
        { id: 'b', text: `Ignore it. It's probably a scam        ` }, 
        { id: 'c', text: `Do a quick search to see if others have received similar messages.        ` }, 
        
      ],
      
      response : [
        {id : 'a' , text : ` Yikes! Scammers LOVE pretending to be tech support. Giving them remote access is like giving them complete control over your phone and everything on it.

        `},
        {id : 'b' , text : ` Smart move! Those urgent "tech support" messages are almost always scams. Ignoring them is the safest way to protect yourself.

        `},
        {id : 'c' , text : ` Way to be proactive!  Researching is always a smart move.


        `},
       
       
      ],
      feedBack : `Never grant remote access to someone you don't know and trust completely, like a parent or a tech professional you've called directly. Scammers often use this tactic to steal info or install malware.

      * * * * * *
      
      Wow, you've got some serious internet safety skills now! Let's do a quick recap:

      Key Takeaways:
      Protect Your Info: Your personal details are valuable. Don't hand them out like candy!
      Verify Everything: If it seems fishy, it probably is. Check those links, emails, and amazing deals carefully.
      Security Basics: Strong passwords, secure devices, antivirus software – your first line of defense.
      Shopping Smarts: Reputable stores only! Do your research before you buy.
      Think Before You Click: Avoid clicking on suspicious links or downloading unknown stuff.
      Social Media Savvy: What you post lives forever. Would you be okay with anyone seeing it?
      App Awareness: Not all apps are created equal. Check reviews and permissions before you download.
      Remote Access = Red Flag: Don't hand over control of your device to strangers.
      Report & Protect: Know where to report scams, and learn more (like how a VPN works!).
      
      Chatbot:  Remember, online safety isn't just about knowing stuff, it's about making those smart choices every day!  Keep practicing, and you'll be an 'Internet Safety Ninja' in no time.  😎
      
      * * * * END of LEARNING ACTIVITY * * * * 
      * * * * END of LEARNING ACTIVITY * * * * 
      
      `
    },


    {
      id : 13,
      text : `What is malware?`,
      options : [
        {id : 'a', text : 'Software designed to damage a computer or phone.'},
        {id : 'b', text : 'Websites that show inappropriate content or advertise for unsavory companies.        '},
        {id : 'c', text : ' A device that’s infected with a virus and must be wiped.'},
        {id : 'd', text : 'Software that will help you diagnose why a computer isn’t working properly.'},
      ],
      correctAnswer : 'a'
    }
  ]