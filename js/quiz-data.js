/* =========================================================
   VINI JOB ALERTS - QUIZ DATA
   Naya sawal add karne ke liye: kisi subject ke "questions"
   me ek { ... }, entry copy karo.
   answer: 0 = pehla option, 1 = dusra, 2 = teesra, 3 = chautha
   ========================================================= */

   var quizSets = [

    {
      id: "gk",
      title: "General Knowledge",
      icon: "🌏",
      desc: "India ka basic GK, har exam ke liye zaruri",
      questions: [
        { q: "Bharat ka rashtriya pashu kaun sa hai?", options: ["Sher (Lion)", "Bengal Tiger", "Hathi", "Tendua"], answer: 1, explanation: "Royal Bengal Tiger Bharat ka rashtriya pashu hai." },
        { q: "Bharat ka Samvidhan kab lagu hua?", options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"], answer: 1, explanation: "Samvidhan 26 January 1950 ko lagu hua, isliye Gantantra Diwas manaya jata hai." },
        { q: "Bharat ki sabse lambi nadi (Bharat ke andar) kaun si hai?", options: ["Yamuna", "Godavari", "Ganga", "Narmada"], answer: 2, explanation: "Ganga Bharat ki sabse lambi nadi maani jati hai." },
        { q: "Kshetrafal ke hisaab se Bharat ka sabse bada rajya kaun sa hai?", options: ["Madhya Pradesh", "Maharashtra", "Uttar Pradesh", "Rajasthan"], answer: 3, explanation: "Rajasthan area ke hisaab se sabse bada rajya hai." },
        { q: "Rashtra Pita kise kaha jata hai?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Sardar Patel"], answer: 1, explanation: "Mahatma Gandhi ko Rashtra Pita kaha jata hai." },
        { q: "Taj Mahal kis shehar me hai?", options: ["Delhi", "Jaipur", "Agra", "Lucknow"], answer: 2, explanation: "Taj Mahal Agra (Uttar Pradesh) me Yamuna nadi ke kinare hai." }
      ]
    },
  
    {
      id: "punjab",
      title: "Punjab GK",
      icon: "🌾",
      desc: "Punjab Police, PSSSB, PSTET jaise exams ke liye",
      questions: [
        { q: "Punjab ki rajdhani kaun si hai?", options: ["Amritsar", "Chandigarh", "Ludhiana", "Patiala"], answer: 1, explanation: "Chandigarh Punjab aur Haryana dono ki rajdhani hai." },
        { q: "Sri Harmandir Sahib (Golden Temple) kis shehar me hai?", options: ["Jalandhar", "Ludhiana", "Amritsar", "Bathinda"], answer: 2, explanation: "Golden Temple Amritsar me hai." },
        { q: "Punjab ki rajya bhasha kaun si hai?", options: ["Hindi", "Urdu", "Punjabi", "English"], answer: 2, explanation: "Punjab ki rajya bhasha Punjabi hai." },
        { q: "Neeche me se kaun si nadi Punjab me nahi behti?", options: ["Sutlej", "Beas", "Ravi", "Yamuna"], answer: 3, explanation: "Sutlej, Beas aur Ravi Punjab ki nadiyan hain. Yamuna Punjab me nahi behti." },
        { q: "Jallianwala Bagh narsanhar kis saal hua?", options: ["1915", "1919", "1925", "1930"], answer: 1, explanation: "Jallianwala Bagh narsanhar 13 April 1919 ko Amritsar me hua." },
        { q: "'Punjab' shabd kin do shabdon se bana hai?", options: ["Pan + Jab", "Panj + Ab (paanch + paani)", "Pun + Jaab", "Pani + Jal"], answer: 1, explanation: "Faarsi ke 'Panj' (paanch) aur 'Ab' (paani) se, matlab paanch nadiyon ki dharti." },
        { q: "Punjab ka rajya pakshi kaun sa hai?", options: ["Mor", "Baaz (Northern Goshawk)", "Kabutar", "Tota"], answer: 1, explanation: "Baaz (Northern Goshawk) Punjab ka rajya pakshi hai." }
      ]
    },
  
    {
      id: "maths",
      title: "Maths",
      icon: "➗",
      desc: "Percentage, speed, square root aur basic maths",
      questions: [
        { q: "200 ka 15% kitna hota hai?", options: ["20", "25", "30", "35"], answer: 2, explanation: "200 x 15/100 = 30" },
        { q: "12 x 12 kitna hota hai?", options: ["124", "144", "154", "164"], answer: 1, explanation: "12 x 12 = 144" },
        { q: "169 ka vargmool (square root) kitna hai?", options: ["11", "12", "13", "14"], answer: 2, explanation: "13 x 13 = 169" },
        { q: "25% ko bhinn (fraction) me likhein to?", options: ["1/2", "1/3", "1/4", "1/5"], answer: 2, explanation: "25/100 = 1/4" },
        { q: "Triangle ke teeno kono ka yog kitna hota hai?", options: ["90 degree", "180 degree", "270 degree", "360 degree"], answer: 1, explanation: "Kisi bhi triangle ke teeno angles ka sum 180 degree hota hai." },
        { q: "Ek gaadi 60 km/h ki speed se 2.5 ghante chale to kitni doori tay karegi?", options: ["120 km", "140 km", "150 km", "160 km"], answer: 2, explanation: "Doori = speed x samay = 60 x 2.5 = 150 km" }
      ]
    },
  
    {
      id: "reasoning",
      title: "Reasoning",
      icon: "🧠",
      desc: "Series, odd one out aur logical sawal",
      questions: [
        { q: "Series poori karo: 2, 4, 8, 16, ?", options: ["24", "30", "32", "36"], answer: 2, explanation: "Har number pichle ka double hai: 16 x 2 = 32." },
        { q: "Alag (odd one) chuno:", options: ["Seb", "Aam", "Kela", "Aloo"], answer: 3, explanation: "Aloo sabzi hai, baaki teeno phal hain." },
        { q: "Agar A=1, B=2, C=3 hai, to CAB ka total kitna hoga?", options: ["5", "6", "7", "8"], answer: 1, explanation: "C(3) + A(1) + B(2) = 6" },
        { q: "Agar aaj Shukrawar (Friday) hai, to parso kaun sa din hoga?", options: ["Shaniwar", "Ravivar", "Somwar", "Mangalwar"], answer: 1, explanation: "Kal Shaniwar, parso Ravivar (Sunday)." },
        { q: "Series poori karo: 5, 10, 20, 40, ?", options: ["60", "70", "80", "100"], answer: 2, explanation: "Har number double hota hai: 40 x 2 = 80." },
        { q: "Doctor : Hospital :: Teacher : ?", options: ["School", "Court", "Market", "Dukaan"], answer: 0, explanation: "Doctor hospital me kaam karta hai, teacher school me." }
      ]
    },
  
    {
      id: "english",
      title: "English",
      icon: "📘",
      desc: "Synonym, antonym aur basic grammar",
      questions: [
        { q: "'Happy' ka synonym kaun sa hai?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1, explanation: "Joyful ka matlab bhi khush hona hai." },
        { q: "'Brave' ka antonym (opposite) kya hai?", options: ["Strong", "Bold", "Coward", "Clever"], answer: 2, explanation: "Brave ka ulta Coward (darpok) hota hai." },
        { q: "Sahi vakya chuno: She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "Third person singular (She) ke saath present tense me 'goes' aata hai." },
        { q: "'Child' ka plural kya hai?", options: ["Childs", "Childes", "Children", "Childrens"], answer: 2, explanation: "Child ka plural Children hota hai." },
        { q: "'Go' ka past tense (V2) kya hai?", options: ["Goed", "Gone", "Went", "Going"], answer: 2, explanation: "Go - Went - Gone" },
        { q: "Khali jagah bharo: ___ apple a day keeps the doctor away.", options: ["A", "An", "The", "No article"], answer: 1, explanation: "Apple vowel sound se shuru hota hai, isliye 'An' lagta hai." }
      ]
    },
  
    {
      id: "computer",
      title: "Computer",
      icon: "💻",
      desc: "Computer basics, har sarkari exam me puchhe jate hain",
      questions: [
        { q: "CPU ka full form kya hai?", options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Program Unit"], answer: 1, explanation: "CPU = Central Processing Unit, computer ka dimaag." },
        { q: "Computer ka janak (Father of Computer) kise kaha jata hai?", options: ["Bill Gates", "Charles Babbage", "Steve Jobs", "Alan Turing"], answer: 1, explanation: "Charles Babbage ko Computer ka janak kaha jata hai." },
        { q: "Copy karne ka keyboard shortcut kya hai?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"], answer: 2, explanation: "Ctrl + C = Copy, Ctrl + V = Paste, Ctrl + X = Cut, Ctrl + Z = Undo." },
        { q: "WWW ka full form kya hai?", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], answer: 0, explanation: "WWW = World Wide Web." },
        { q: "1 Byte me kitne bits hote hain?", options: ["4", "8", "16", "32"], answer: 1, explanation: "1 Byte = 8 bits." },
        { q: "Inme se input device kaun sa hai?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2, explanation: "Keyboard se hum computer ko data dete hain, isliye yeh input device hai." }
      ]
    },
  
    {
      id: "science",
      title: "Science",
      icon: "🔬",
      desc: "Physics, chemistry aur biology ke basic sawal",
      questions: [
        { q: "Paani ka rasayanik (chemical) formula kya hai?", options: ["CO2", "H2O", "O2", "NaCl"], answer: 1, explanation: "Paani = H2O (2 hydrogen + 1 oxygen)." },
        { q: "Surya ke sabse kareeb kaun sa grah hai?", options: ["Venus", "Earth", "Mercury", "Mars"], answer: 2, explanation: "Mercury (Budh) Surya ke sabse kareeb hai." },
        { q: "Paudhe photosynthesis ke liye kaun si gas lete hain?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], answer: 2, explanation: "Paudhe CO2 lekar dhoop ki madad se khana banate hain aur oxygen chhodte hain." },
        { q: "Vayask (adult) insaan ke sharir me kitni haddiyan hoti hain?", options: ["106", "206", "306", "406"], answer: 1, explanation: "Vayask insaan me 206 haddiyan hoti hain." },
        { q: "Dhoop se sharir ko kaun sa vitamin milta hai?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: 3, explanation: "Dhoop se sharir Vitamin D banata hai." }
      ]
    }
  
  ];