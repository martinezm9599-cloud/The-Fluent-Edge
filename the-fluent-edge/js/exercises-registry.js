/*
  EXERCISES REGISTRY
  -------------------
  Two things live here:

  1. EXERCISE_CATEGORIES — the sections shown on the homepage, in the
     order they appear.

  2. EXERCISES — every exercise. Each one points at a category via
     its "category" field, which must match one of the ids above.

  NOTE: the "Review" section on the homepage (missed phrases from
  every exercise) is NOT listed here — it's built directly in
  app.js, since it isn't a fixed phrase list like the exercises below.

  To add a new exercise:
  1. Create its data file in /exercises/data/nombre.js
     (same format as /exercises/data/invitations.js)
  2. Copy /exercises/invitations.html to /exercises/nombre.html
     and update the texts, the <script src="data/nombre.js">, and the
     initPracticeSession(..., { exerciseId: "nombre" }) call.
  3. Add an entry below with the matching id and a "category" from
     the list above. The card appears on its own on the homepage,
     under the right section.
*/

const EXERCISE_CATEGORIES = [
  {
    id: "translation",
    title: "Translation Exercises",
    description: "Translate a Spanish prompt into English, one phrase at a time, and self-check the answer."
  }
];

const EXERCISES = [
  {
    id: "invitations",
    category: "translation",
    tag: "Conversation",
    title: "Invitations",
    description: "Accepting and declining invitations in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/invitations.html",
    count: null, // filled in automatically once the data file is loaded
    dataVar: "INVITATIONS_DATA",
    locked: false
  },
  {
    id: "taxi",
    category: "translation",
    tag: "Conversation",
    title: "Taxi",
    description: "Taking a taxi in the city. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/taxi.html",
    count: null,
    dataVar: "TAXI_DATA",
    locked: false
  },
  {
    id: "asking-for-help",
    category: "translation",
    tag: "Conversation",
    title: "Asking for Help",
    description: "Asking for help, offering it, and comforting someone in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/asking-for-help.html",
    count: null,
    dataVar: "ASKING_FOR_HELP_DATA",
    locked: false
  },
  {
    id: "hotel",
    category: "translation",
    tag: "Conversation",
    title: "Hotel",
    description: "Booking a room, checking in, handling problems, and leaving a review. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/hotel.html",
    count: null,
    dataVar: "HOTEL_DATA",
    locked: false
  },
  {
    id: "apologizing",
    category: "translation",
    tag: "Conversation",
    title: "Apologizing",
    description: "Apologizing, taking responsibility, and asking for forgiveness in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/apologizing.html",
    count: null,
    dataVar: "APOLOGIZING_DATA",
    locked: false
  },
  {
    id: "confronting-someone",
    category: "translation",
    tag: "Conversation",
    title: "Confronting Someone",
    description: "Having a serious talk, expressing anger, placing blame, and setting limits in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/confronting-someone.html",
    count: null,
    dataVar: "CONFRONTING_SOMEONE_DATA",
    locked: false
  },
  {
    id: "thanking-someone",
    category: "translation",
    tag: "Conversation",
    title: "Thanking Someone",
    description: "Saying thank you, expressing gratitude, praising someone, and offering to repay a favor in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/thanking-someone.html",
    count: null,
    dataVar: "THANKING_SOMEONE_DATA",
    locked: false
  },
  {
    id: "arguing-with-someone",
    category: "translation",
    tag: "Conversation",
    title: "Arguing with Someone",
    description: "Refusing to argue, rejecting a point, calling out behavior, and setting limits in a dispute. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/arguing-with-someone.html",
    count: null,
    dataVar: "ARGUING_WITH_SOMEONE_DATA",
    locked: false
  },
  {
    id: "hosting-a-guest",
    category: "translation",
    tag: "Conversation",
    title: "Hosting a Guest",
    description: "Welcoming someone into your home, showing them around, and helping them feel comfortable in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/hosting-a-guest.html",
    count: null,
    dataVar: "HOSTING_A_GUEST_DATA",
    locked: false
  },
  {
    id: "calling-the-police",
    category: "translation",
    tag: "Conversation",
    title: "Calling the Police",
    description: "Reporting a theft, a fight, or a suspicious person in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/calling-the-police.html",
    count: null,
    dataVar: "CALLING_THE_POLICE_DATA",
    locked: false
  },
  {
    id: "making-a-complaint",
    category: "translation",
    tag: "Conversation",
    title: "Making a Complaint",
    description: "Reporting a problem with a purchase, demanding a solution, and escalating a complaint in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/making-a-complaint.html",
    count: null,
    dataVar: "MAKING_A_COMPLAINT_DATA",
    locked: false
  },
  {
    id: "at-a-restaurant",
    category: "translation",
    tag: "Conversation",
    title: "At a Restaurant",
    description: "Getting seated, ordering, handling problems, paying the bill, and reviewing a restaurant in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-a-restaurant.html",
    count: null,
    dataVar: "AT_A_RESTAURANT_DATA",
    locked: false
  },
  {
    id: "airport",
    category: "translation",
    tag: "Conversation",
    title: "At the Airport",
    description: "Getting to the airport, tickets, boarding, delays, seats, and going through customs in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/airport.html",
    count: null,
    dataVar: "AIRPORT_DATA",
    locked: false
  },
  {
    id: "cell-phones",
    category: "translation",
    tag: "Conversation",
    title: "Cell Phones",
    description: "Talking about smartphones, apps, problems, video calls, and everyday phone use in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/cell-phones.html",
    count: null,
    dataVar: "CELL_PHONES_DATA",
    locked: false
  },
  {
    id: "at-a-cafe",
    category: "translation",
    tag: "Conversation",
    title: "At a Café",
    description: "Ordering coffee and breakfast, asking for the bill, and talking about a café in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-a-cafe.html",
    count: null,
    dataVar: "AT_A_CAFE_DATA",
    locked: false
  },
  {
    id: "camping",
    category: "translation",
    tag: "Conversation",
    title: "Camping",
    description: "Planning a camping trip, packing gear, weather, campfires, and the campsite in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/camping.html",
    count: null,
    dataVar: "CAMPING_DATA",
    locked: false
  },
  {
    id: "at-the-bank",
    category: "translation",
    tag: "Conversation",
    title: "At the Bank",
    description: "Banks, ATMs, savings, loans, coins, and currency exchange in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-the-bank.html",
    count: null,
    dataVar: "AT_THE_BANK_DATA",
    locked: false
  },
  {
    id: "at-the-tourist-office",
    category: "translation",
    tag: "Conversation",
    title: "At the Tourist Office",
    description: "Asking about places, prices, schedules, tours, and getting around at a tourist information office. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-the-tourist-office.html",
    count: null,
    dataVar: "AT_THE_TOURIST_OFFICE_DATA",
    locked: false
  },
  {
    id: "at-the-doctor",
    category: "translation",
    tag: "Conversation",
    title: "At the Doctor",
    description: "Symptoms, the ER, medication, questions for the doctor, and recovery in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-the-doctor.html",
    count: null,
    dataVar: "AT_THE_DOCTOR_DATA",
    locked: false
  },
  {
    id: "at-the-movies",
    category: "translation",
    tag: "Conversation",
    title: "At the Movies",
    description: "Choosing a film, buying tickets, popcorn, and talking about the movie in English. Translate the Spanish prompt before revealing the answer.",
    href: "exercises/at-the-movies.html",
    count: null,
    dataVar: "AT_THE_MOVIES_DATA",
    locked: false
  }
];
